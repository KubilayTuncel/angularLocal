import { Observable, Subject, from, of, map, filter, last, take, first, BehaviorSubject } from "rxjs";

// observer prototype class seklinde calisirken subject class i singleton class i gibi calisiyor
//observer da yani her defasinda farkli objeler üretilerek olusturulan method cagirilirken
//subject class 'i singleton class olarak calisir ve tek obje üzerinden methodlari cagirir
// o yüzden subject classin dan methodlar cagirildiginda burada console.log da ani sonuclari görürüz
// bu konunun altinda java design pattern mitolojisi var.
const observable =new Observable<string> ((subscriber)=>{
    subscriber.next("1");
    subscriber.next("2");
    subscriber.next(Math.random().toString());

    setTimeout(() => {subscriber.next('3')},1000)

    subscriber.complete();
});

const observer = {
    next: (value: string) =>console.log(value),
    error: (err: any) => console.log(err),
    complete: () => console.log("bitti")
}


observable.subscribe(observer)

observable.subscribe(data=>console.log('observable 1'+data));
observable.subscribe(data=>console.log(data));

const subject = new Subject<number>();

subject.subscribe(data=>console.log(data));
subject.next(1);
subject.next(Math.random());

//subject gibi davranan ve daha önceki datalari da görebilen class behavior class'i

const behaviorSubject = new BehaviorSubject(-1);

behaviorSubject.next(-2); // burada consolog dan bile önce olsa burayi da görüp consol da yazar.

behaviorSubject.subscribe(data=>console.log(data));
behaviorSubject.subscribe(data=>console.log(data));

behaviorSubject.next(0)

//mesela ayni user bilgisine ulasmak icin subject class ini kllanmak mantikli.
// service => user.subject()

from(['toyota','audi']).subscribe(data=>console.log(data));
of('bmw','renault').subscribe(data=>console.log(data));

from([1,3,7,9,10])
    .pipe(
        map((n)=>n%2 ==0)
    )
    .subscribe(data=>console.log(data));

    from([1,3,7,9,10])
    .pipe(
        filter((n)=>n%2 ==0),last()
    )
    .subscribe(data=>console.log(data));

    from([1,3,7,9,10])
    .pipe(
        filter((n)=>n%2 ==0),take(2)
    )
    .subscribe(data=>console.log(data));

    from([1,3,7,9,10])
    .pipe(
        first((n)=>n%2 ==0),last()
    )
    .subscribe(data=>console.log(data));

    from([1,3,7,9,10])
    .pipe(
        last((n)=>n%2 ==11, 11 ) // virgülden sonra default deger getir,esi icin 11 degerini yazdik
    )
    .subscribe({
        next : data=>console.log(data), // burada buldugu datayi getir yoksa next ile bir sonraki satira geciyoruz.
        error : err=>console.log(err.message) //ve bu sekilde errro u handle etmis oluyoruz.
    });

from([
    {name:"samsung s23", price:30000},
    {name:"samsung s24", price:40000},
    {name:"samsung s25", price:50000}
]).pipe(
    filter(p=> p.price>30000),
    map((m)=>m.name)
).subscribe({
    next : data=>console.log(data), 
        error : err=>console.log(err.message)
})