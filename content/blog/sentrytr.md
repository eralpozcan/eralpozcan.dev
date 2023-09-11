---
title: Vue3 ile Sentry Nasıl Kullanılır?
date: 2023-06-26
cover: sentry.webp
language: TR
links: 
  - medium: https://medium.com/@eralpozcan/vue3-ile-sentry-nasil-kullanilir-6e56dc18623d
  - devto:  https://dev.to/eralpozcan/how-to-use-sentry-with-vue-3-2bi2
tags:
  - vue
  - sentry
  - performance
  - monitoring
  - error
---

# Vue3 ile Sentry Nasıl Kullanılır?

Sıklıkla hatalar ile karşılaşıyoruz ve bunları bulmak bir o kadar da zor olmuyor mu? Hata ve Performans İzleme araçlarından bir tanesi de Sentry. Bu yazıda, Sentry’nin nasıl kurulacağını ve performans izlemesiyle nasıl iyileştirmeler yapabileceğimizi anlatacağım. Hazırsan başlıyoruz! 🚀

## **Sentry Nedir?**

![Sentry](https://cdn-images-1.medium.com/max/2000/1*KPMnUpwtjAJ_97NZO50Lew.png)

Aslında genel bir tanımlama yapmak gerekirse; **Sentry** bir çok uygulamamız için bir hata izleme ve hata raporlama platformu, hatta buna performans raporlaması platformu olduğunu da ekleyebiliriz.

Sentry, geliştiricilere, gerçek zamanlı olarak uygulama hatalarını izlemelerini, hata raporlarını alıp analiz etmelerini ve sorunları hızla teşhis etmelerini sağlar.

Sentry’nin **temel özellikleri** arasında aşağıdakiler bulunur:

1. **Hata İzleme**: Sentry, uygulamalardaki hataları izler ve yakalar. İstisnalar, hata mesajleri, kullanıcı arayüzündeki hatalar gibi çeşitli hata türlerini tespit edebilir.

2. **Gerçek Zamanlı İzleme**: Sentry, uygulamalardaki hataları gerçek zamanlı olarak izler ve hızlı bir şekilde bildirim gönderir. Bu sayede geliştiriciler, hataları anında fark edebilir ve müdahale edebilir.

3. **Hata Raporlama**: Sentry, hataları ayrıntılı bir şekilde raporlar. Hata raporları, hatanın ne zaman, nerede ve hangi koşullar altında meydana geldiğine dair önemli bilgiler içerir. Bu, geliştiricilerin hataları teşhis etmelerine ve düzeltmelerine yardımcı olur.

4. **Entegrasyonlar**: Sentry, birçok popüler programlama dilini ve çeşitli platformları destekler. Bu sayede farklı türdeki uygulamalar ve sistemlerle entegre çalışabilir.

5. **Performans İzleme**: Sentry, uygulamaların performansını izleyebilir ve yavaşlık sorunlarını tespit edebilir. Performans izleme özellikleri sayesinde geliştiriciler, uygulamalarının performansını optimize edebilir ve kullanıcı deneyimini artırabilir. ***Bu konuda da bir örnek yapmış olacağız*** 😉

*Ayrıca burada ki temel anlatıma ek olarak Onur Dayıbaş’ın [Sentry’deki Bazı Kavramlar](https://medium.com/frontend-development-with-js/sentrydeki-baz%C4%B1-kavramlar-project-env-release-ve-sourcemap-2a041395c43b) medium yazısını da okumanızı tavsiye ediyorum.*

## Kurulum (Installation)

Öncelikle burada yapacağımız işlemleri görseller ile destekleyeceğim. Zaten Sentry yeterince bu konuda bize yardımcı oluyor olacak.

📌 **[Sentry](https://sentry.io/)**’nin sitesine gidip hesap oluşturuyor veya hesabımız var ise giriş yapıyoruz.

📌 Eğer ilk defa giriş yapıyorsanız sizden bir organizasyon oluşturmanızı istiyor. Bunun temel sebeplerinden birisi diğer takım arkadaşlarınız ile de birlikte çalışabilmeniz için istiyor. Bu örnekte “*Example*” yaparak bu aşamayı geçiyorum.

![Create Sentry Organization](https://cdn-images-1.medium.com/max/2000/1*4f-HuN-NdMT71Tk04eEAeg.jpeg)

📌 Kurmak istediğimiz platformu seçeceğimiz ekran karşılıyor bizi. Burada **Vue**’yü seçiyoruz.

![Choose Platform](https://cdn-images-1.medium.com/max/3338/1*LrfmXgglYv3nRt3MrQrMng.jpeg)

📌 Burada alarm (*alert*) sıklığını seçiyoruz. Daha sonra bu alanı ayarlamamız mümkün şimdilik “*Alert me on every new issue*” seçeneğini seçip bir sonraki aşamamız olan proje adımızı oluşturup ve takımımızı seçiyoruz. Bir takım yok ise varsayılan olarak organizasyonuzun adın da bir takım geliyor. Farklı bir takım kurmak isterseniz “+” ya tıklayıp yaratabilirsiniz. “*Create Project*” diyoruz.

![Create Project with alert frequency](https://cdn-images-1.medium.com/max/3380/1*-L3H4uW2SZgSvkJNrl817w.jpeg)

📌 Burada bizim için yönergeleri **Sentry** veriyor. Burada 3 temel duruma göre otomatik ayarlamaları bizim için yapıyor. Anlamak için önemli noktalar ise şöyle;

1. **Error Monitoring**: Hata izleme ayarımız. Bu ayar varsayılan olarak seçili geliyor ve kapatamıyoruz. Çünkü temel amacımız zaten o 😉

1. **Performance Monitoring**: Burada sayfa yüklemelerimizin perfomansını ölçüyoruz. İstemiyorsak buradan bu seçeneği kaldırıyoruz.

1. **Session Replay**: Burası da aslında çok sevdiğimiz yerlerden birisi hataların nasıl karşılaşıldığını ufak bir video kesiti ile görebildiğimiz bir video sunuyor. Ancak tabi ki çok yüksek oranlarda bu verileri toplamanız önerilmiyor. Sadece hatalar için yapmanız yeterli diyebilirim.

![Install Configure](https://cdn-images-1.medium.com/max/3318/1*70xw3bqMfOfL130UIlSdDw.jpeg)

Gelelim kurulum aşamasına, aslında yukarıda görselde gösterdiği gibi “*npm*” yada “*yarn*” kullanımıza göre projemize **Sentry** paketimizi kuruyoruz. Daha sonrasında Vue3 örnek kodunu direkt kopyalayıp. “*main.js*” dosyamıza yapıştırıyoruz. Burası için tabi ki sizin için farklı bir “*main.js*” dosyanız olabilir. Burada önemli noktalar ``` Sentry.init({])``` ile başlayan yeri almamız yeterli (*Tabi ki import etmeyi unutmayın*). Buradaki ayarlamaların önemli noktaları ve anlamları ise şöyle;

* **App**: Uygulama nesnemiz yani createApp ile oluşturduğumuz veya izlemek istediğimiz uygulamayı belirtmek için kullanılır.

* **dns:** Hata raportlarının gönderileceği Sentry sunucusunun adresi. Bu adresi .env gibi bir şekilde tutmanızı öneriyorum. Kötü amaçlı farklı veriler görüp sorun yaşayabilirsiniz.

* **integrations**: Sentry entegrasyonlarını yapılandırmak için kullanılır. Bu örnekte, ```Sentry.BrowserTracing``` ve ```Sentry.Replay``` entegrasyonları kullanılır.

* **tracesSampleRate**: Performans izleme örneklem oranı. Yüzde cinsinden ifade edilir ve bu örnekte **%100** olarak ayarlanmıştır. Gerçek üretim ortamlarında düşürülmesi önerilir.

* **replaysSessionSampleRate**: Oturum kaydı örneklem oranı. Yüzde cinsinden ifade edilir ve bu örnekte **%10** olarak ayarlanmıştır. Geliştirme aşamasında **%100** olarak ayarlanıp, üretim ortamında daha düşük bir oranda örnekleme yapılabilir.

* **replaysOnErrorSampleRate**: Hata oluşan oturumların örnekleme oranı. Eğer zaten oturum örnekleme yapmıyorsanız, hata içeren oturumların örnekleme oranını **%100** olarak ayarlayabilirsiniz.

Görselde gözükmeyen ancak daha detaylı ayarlamalar yapmak istiyorsanız. [*Sentry Basic Options*](https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/?original_referrer=https%3A%2F%2Fvueschool.io%2F&utm_campaign=evergreen-vue-school-course-2022&utm_medium=partner&utm_source=vueschool)’a tıklayarak detaylı farklı ayarlamalar yapmanızda mümkün. Temel kurulum işlemlerini aslında burada tamamlamış olduk. Şimdi artık ***ilk hatamızı*** nasıl alacağımıza bakalım.

## Hatalar (Issues)

Kurulumları tamamladıktan sonra **Sentry** bizi otomatik olarak aşağıdaki gibi bir sayfaya yönlendiriyor ve bizden hatalarımızı göndermemizi bekliyor. Aslında tüm hataları burada göreceğiz yada izleyeceğiz.

![Sentry Issues Page](https://cdn-images-1.medium.com/max/3786/1*Kn4dZSqzZFClgWi6WZ7rew.jpeg)
> Peki bu hatayı yada farklı dataları nasıl buraya göndereceğiz?*🤔*

👩‍💻 Basit bir button ve fonksiyon oluşturuyoruz.

```js
  <button @click="sendSentryData">Click me</button>
  function sendSentryData() {
      Sentry.captureMessage('Button clicked');
  }
```

Eğer bu fonksiyonu oluşturduğumuzda **Sentry**’yi import etmemiş ve tanımlamamışsanız. Aşağıda ki görselde ki hatayı alacaksınız.

![Sentry ReferenceError](https://cdn-images-1.medium.com/max/2524/1*vemyluI6ZEEpZ0vCFi1TVA.jpeg)

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWpxbTN3b3Z5aXdiMjBraWNnb3N4OXphYzRmNjF0anZwcHR5eG4xbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JqDeI2yjpSRgdh35oe/giphy.gif" loading="lazy" alt="Ta daa Friends Gif"></img>

![Show Reference Error in Issues](https://cdn-images-1.medium.com/max/3800/1*4BK7hzeNWYzqCm0sEHqTyQ.jpeg)
> **İlk hatamızı aldık!! Peki bu nasıl oldu?**

Çünkü en temelinde bir referans hatası aldığımız ve **replaysOnErrorSampleRate** değerimiz %100 olduğu için Sentry bunu algılayarak bize direkt olarak gönderdi. İçeriğine tıklayarak hata’nın oluşumunun tekrarını yada detaylı bilgileri öğrenebiliriz, konuyu fazla uzatacağını düşündüğüm için buraya girmiyorum. Hatamız Sentry’yi tanımlamadığımız için almıştık. Bunun için ```import * as Sentry from '@sentry/vue' ``` kodunu ekleyerek tanımlamamızı yapıyoruz. Ve butonumuza tekrar tıklıyoruz. 🖱️

![Issueses](https://cdn-images-1.medium.com/max/3340/1*GnbJRVuMPRMBh2cLLlznxw.jpeg)

Gördüğünüz üzere göndermiş olduğumuz mesajı da görebiliyoruz. Burada ki önemli noktalardan birisi de bu hataya kaç kez kaç kişinin yaşadığını görebiliyor oluşumuz. *Events* sayısı bu hatanın kaç kez yaşandığını, *Users*’da ise kaç farklı kullanıcının bu durumu yaşadığını görüyoruz. Burada hataların içerisine girerek detaylı bilgiler öğrenmemiz mümkün. Temel anlamda basit bir hata ve veri gönderme işlemini gerçekleştirmiş olduk. Sıra Performans analizini görmekte.

## Performans İzleme (Performance Monitoring)

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhibDhtZXYyNjh5ampvY2x4ZjRlYnM1ZG1qMnIydmMyOXZ0M20yNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rM0wxzvwsv5g4/giphy.gif" loading="lazy"></img>

Bildiğin üzere hepimiz için önemli olan şeylerden birisi de sayfa yükleme hızlarımız yani projemizin gösterdiği performans. ***Sentry*** ile bunu analiz etmemizin mümkün olduğundan bahsetmiştik. Kurulum aşamasında Performance Monitoring seçeneğini seçtiysek aslında kurulum aşamasında biraz hız kazanıyoruz. “*main.js*” dosyamıza geri döndüğümüzde **BrowserTracing** ve **tranceSampleRate** değerlerini göreceğiz. BrowserTracing’ de yapacağımız ayarlamalar aslında domainimizin adreslerini girmek. *localhost* varsayılan olarak geliyor. Bunun yanında deploy ettiğimiz adresi de eklememiz gerekiyor.

![](https://cdn-images-1.medium.com/max/2074/1*iAxm524BfUalKzVQgyP5Bg.jpeg)

Ben örnekleride yapacağım olan “[*https://moviepal.vercel.app*](https://moviepal.vercel.app)”ı ekledim. Böylece deploy edilmiş halde de performansını ölçüyor olacağım.

Bir diğer değerimiz ise **tranceSampleRate** bu değerin prod. ortamlarında *düşürülmesini* öneriyorlar. Tabi ki bir local geliştirme yapıyorsanız bu değerin **1.0** olması öneriliyor. Böylece tüm sayfa yenilemelerinizi analiz etmiş olacaksınız.
> **Peki bu Perfomance ne işimize yarayacak? Gelin uygulamalı olarak görelim.**

<img loading="lazy" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODB2d2didDNqYzh0cWl5YWd2ZTFncG1zaW0ycW9ia3VqaXhrY21qeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2IudUHdI075HL02Pkk/giphy.gif"></img>

Aslında bu projede geliştirmeler yaparken performans eğrilerini kontrol ediyordum. Ve sonra aslında sayfanın yüklenmesinin resimlerden ötürü uzun sürdüğünü fark ettim. Bu konu hakkında **UseImage**’ı kullanıyordum efektif olacağını düşünüyordum ancak öyle olmamış gözüküyor.

📌 Buradaki yaptığım geliştirme örneklerini [**Gist**](https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430) üzerinden paylaştım.

![](https://cdn-images-1.medium.com/max/3346/1*YbGalxlbV7SLVzmxpncoZg.jpeg)

📌 Burada ilk yaptığım işlem [UseImage](https://vueuse.org/core/useImage/)’ı kaldırıp düz Img tagı kullanarak durumu izledim.

![](https://cdn-images-1.medium.com/max/3326/1*FIKgAMgISoZUcwaMtBuhYQ.jpeg)

📌 Görüldüğü üzere değerlerimizde biraz bir düzelme oluyor *CLS* değeri yükselmiş olsa da diğer parametrelerde **%50**’yi geçen bir düşme söz konusu. Daha sonra Swiper’ın lazy ve img tag’ının lazy özelliklerini kullanıma açıyorum. Ve *TTFB* değerimizde ciddi bir düşme söz konusu oluyor.

![](https://cdn-images-1.medium.com/max/3312/1*3UqIPltOhomjiLorbHV-dg.jpeg)

📌 Daha sonra yine görsellerde gördüğümüz gibi *CSS*’lerin component içerisinde tekrar tekrar import edilip yüklendiğini fark ediyorum. Ve bunu projemizin ana dizinine global olarak import ediyorum. Böylelikle bu sayfada tekrar tekrar yüklenmesine gerek kalmayacak.

![](https://cdn-images-1.medium.com/max/3320/1*4PBTiuyqpEBY7mV_yjWsMQ.jpeg)

> Yaptığımız süreçlerin daha karşılaştırılabilir bir şekilde gösterildiği bir tabloyu aşağıda bulabilirsiniz.👇

|         Process          | Swiper CSS Imported | Event Duration |   CLS   |   FCP   |   FP    |   LCP   |  TTFB   | Gist |
|--------------------------|---------------------|----------------|---------|---------|---------|---------|---------|------|
| Swiper with UseImage     | Yes                 | 2.93s          | 0.226   | 733.4ms | 733.4ms | 1.207s  | 80.20ms | [Swiper with UseImage]('https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430#file-swiper1useimage-vue') |
| Swiper with Img Tag      | Yes                 | 2.67s          | 0.392   | 383.4ms | 383.4ms | 1.157s  | 35.60ms | [Swiper with Img Tag]('https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430#file-swiper2img-vue') |
| Swiper with Img and Lazy | Yes                 | 2.06s          | 0.253ms | 391ms   | 391ms   | 791.5ms | 18.60ms | [Swiper with Img and Lazy]('https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430#file-swiper3imglazy-vue') |
| Swiper with Img and Lazy | No                  | 1.78s          | 0.218ms | 312.9ms | 312.9ms | 693.7ms | 8ms     | [Swiper with Img and Lazy without CSS]('https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430#file-swiper4imglazycss-vue') |


***Swiper CSS Imported:** Swiper CSS’lerinin sayfa içerisinde tekrar çağırılıp çağrılmadığını gösterir. Eğer değer “No” ise projenin ana dizinin de çağırılmıştır.*

> Kısaltmalar ve metrikler hakkında bilginizin yeterli olmadığını düşünüyorsanız. Google [web.dev](https://web.dev/metrics/) sizin için faydalı olabilir.

Görüldüğü üzere, **Sentry**’nin sağladığı Performans İzleme aracını kullanarak basit bir örnek oluşturduk ve kodumuzu daha optimize hale getirdik. Elbette farklı optimizasyon yöntemleri bulunmaktadır, ancak burada yaptığımız bazı basit düzeltmeler ve **Sentry** aracılığıyla sayfa yükleme hızımızı önemli ölçüde artırdık.

> ## **Bu iyileştirmelerle sayfa yükleme hızımızı yaklaşık olarak %60 oranında artırmış olduk.**

Bu yazımda ***Sentry***’nin kullanımı ve kurulumunun nasıl yapılacağına bize nasıl faydalı olacağına dair örnekler yaparak sizlere anlatmaya çalıştım.

*Medium yazımı okuduktan sonra [Linkedin ](https://www.linkedin.com/in/eralpozcan/)hesabımdan sorularınız yada önerileriniz var ise ulaşabilirsiniz.*

Bir sonraki yazımda görüşmek üzere 📩
