# React Compound Component Pattern

Compound kelime anlamı olarak bileşik demek ve react ile bir compound component oluşturduğumuzda aslında bir grup componenti bir araya getiriyoruz. Ancak diğer componentlerden farklı olarak, bu component grubundaki componentler damacana ile pompası gibi ayrı ayrı bir işe yaramazken, bir araya gelince çok işe yarayabiliyorlar.

## Login Formu

Bir örnek üzerinden gidersek daha anlaşılır olacaktır. Diyelim ki aşağıdaki gibi basit bir login formunuz var.
![](https://i.ibb.co/XX8PGdZ/Screenshot-2019-08-20-at-18-29-27.png)

Beklentimiz bu login formunu çağırdığımızda kendi içindeki state ile işlemleri yöneterek, kullanıcı submit işlemi yaptığında bize girilen değerleri göndermesi.

Mantık olarak çok basit bir form, içerisindeki state'de 3 alan tutması yeterli (email, password, hasErrors) ve kullanıcı bu submit ettiğinde bu bilgileri dışarı aktarması lazım. Yani özetle şu şekilde kullanıyor olalım.

```
<LoginForm onSubmit={console.log} />
```

Kullanıcı formu doldurup submit tuşuna basınca console logda bu bilgiler görülecek, bi alanı boş bıraktı ise error mesajı görüntülenecek.

İşler buraya kodar çok kolay ve istediğimiz gibi gitti ve bu component'i kullanmaya başladık. Sonra istendi ki bu form aynı zamanda headerda da olacak ve orada yatay şekilde olacak. İyi güzel sıkıntı yok bir properti eklerim "vertical" adında, ve bu değer true ise LoginForm componenti içinde yatay yerleştiririm. Sıkıntı yok!

![](https://i.ibb.co/vL3CMdx/Screenshot-2019-08-20-at-18-42-24.png)

Kısa bir süre sonra bir istek daha geldi, bu formu ebesinin örekesinde de kullanacaz ama bu sefer button en tepede ve error mesajı email ve password alanları arasında olacak. Patron çıldırdı.

İşte tam bu gibi durumda Compound Component yaklaşımını kullanmak hayat kurtarabilir.

Aşağıda vertical ve horizontal formları görüyorsunuy. Bileşenleri istediğimiz şekilde yerleştirirken logic yani bu örnek için form state yönetimi hiç değişmiyor.

#### Dikey Form

![](https://i.ibb.co/sF8mFn9/vertical.png)

#### Yatay Form

![](https://i.ibb.co/xhHNctN/horizontal.png)
