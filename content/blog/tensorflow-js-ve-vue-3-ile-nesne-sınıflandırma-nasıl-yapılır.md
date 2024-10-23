---
title: TensorFlow.js ve Vue 3 ile Nesne Tanımlama Nasıl Yapılır?
date: 2024-06-31
cover: tensorflowjs.webp
ogImage: /assets/images/blog/tensorflowjs.webp
language: tr
links: 
  - medium: https://medium.com/@eralpozcan/tensorflow-js-ve-vue-3-ile-nesne-s%C4%B1n%C4%B1fland%C4%B1rma-nas%C4%B1l-yap%C4%B1l%C4%B1r-999cdcdce9d9
sitemap:
  lastmod: 2024-06-31
  changefreq: monthly
  priority: 0.8
  loc: http://eralpozcan.dev/blog/tensorflow-js-ve-vue-3-ile-nesne-sınıflandırma-nasıl-yapılır
---

# TensorFlow.js ve Vue 3 ile Nesne Tanımlama Nasıl Yapılır?

Son yıllarda çok aktif olarak yapay zeka ve bunun ürünleri hayatımızda yer etmeye başladı ve giderek bunların da sayısı artıyor. Hepimizin aklında bunu nasıl hayatımda kullanabilirim sorusu mevcut, bu yazıda sizlerle beraber **TensorFlow.js** ile **ImageNet** sınıflarını ve **MobileNet-v2** modelini kullanarak basit bir obje/nesne tanıyan ve bunu sepete ekleyen bir uygulama yapacağız. Böylelikle [Amazon Go](https://www.amazon.com/b?ie=UTF8&node=16008589011)’nun temel çalışma prensibinde bir senaryosunu da gerçekleştirmiş olacağız. Hadi başlayalım 🚀

![Photo by [Mika Baumeister](https://unsplash.com/@kommumikation?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/12000/0*fdwKAdftxesGC5SP)

**TensorFlow Nedir? TensorFlow.js Nedir?**

<div align="center">
<img src="https://cdn-images-1.medium.com/max/2400/1*TAiolrEtfiuEq4lMNS6OEA.png" alt="TensorFlow.js Logo Picture"> </img>
</div>

**TensorFlow**, Google tarafından geliştirilen ve açık kaynaklı bir makine öğrenimi ve derin öğrenme kütüphanesidir. Geniş bir topluluk tarafından desteklenen **TensorFlow**, özellikle yapay zeka uygulamaları ve büyük ölçekli veri işleme projeleri için kullanılan güçlü bir araçtır. Hem araştırma hem de endüstriyel projelerde yaygın olarak kullanılan **TensorFlow**, esnek ve modüler bir yapısıyla öne çıkar, farklı cihazlarda *bilgisayarlar*, *mobil cihazlar*,*IoT* cihazlarında kullanım imkanı sunar.

**TensorFlow.js** ise **TensorFlow**’un JavaScript sürümüdür ve tarayıcı üzerinde makine öğrenimi modellerinin eğitilmesi ve çalıştırılmasını sağlar. Bu sayede web uygulamalarında, ***tarayıcı tabanlı yapay zeka*** projelerinde kullanılabilecek bir araçtır.

### **Kurulumlar**

Öncelikli olarak **Vue 3** projemizi oluşturalım. 🧐 Bunun için ister *Vue CLI* yada *Vite* kullanabilirsiniz. Ben burada *Vite* kurulumunu tercih edeceğim ancak diğer araçlarında kurulumunu basitleştirmek için *Vue CLI* tercih edebilirsiniz.


```bash
npm create vite@latest tf-js-with-vue -- --template vue
# yarn
yarn create vite my-vue-app --template vue
# If you choice Vue CLI Commands
npm create vue@latest
```

### 📌**Opsiyonel Yükleme**

UI yada CSS kütüphanesi kullanmak istiyorsanız bu aşamada kurulumunu yapmanızı öneririm. Bu örnek projede *TailwindCSS* ve *DaiysiUI* kullandım eğer sizde aynı yapıdan ilerlemek isterseniz ;

* [TailwindCSS with Vite-Vue](https://tailwindcss.com/docs/guides/vite#vue)

* [DaisyUI Install](https://daisyui.com/docs/install/)

sayfalarını ziyaret edebilirsiniz.

Kurulumlarımızı tamamladıktan sonra sonra dosya dizinine gidip, npm install ve npm run dev yaparak boş projemizi bir çalıştırıyoruz. Eğer herhangi bir sorun yada hata almadıysanız [TensorFlow.js Kurulum](https://www.tensorflow.org/js/tutorials/setup) adresine giderek projemize **TensorFlow.js**'i ekliyoruz.

```bash
npm install @tensorflow/tfjs
# yarn
yarn add @tensorflow/tfjs
```

## 📌 Peki TensorFlow.js’i nasıl kullanacağız?

<iframe src="https://giphy.com/embed/MZQkUm97KTI1gI8sUj" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>


**TensorFlow.js**’i kullanmak için bir utils klasörünün altında **tensorflowImageClassifier.js** adında bir dosya oluşturuyoruz. Dosyamızın içine ;

```javascript
import * as tf from '@tensorflow/tfjs';
let model
let labels
let labelsArray
```

Burada **TensorFlow.js**’i “*tf*” takmadıyla import ettik. Ve daha sonrasında kullanılacak olan model, labels ve düzenlenmiş etiketleri içerecek labelsArray’i tanımladık.

## 📌 Model ve Etiketlerin Yüklenmesi

Bu tanımlamaları yaptıktan sonra **loadModel** adında bir fonksiyon oluşturuyoruz. Burada modelimizi ve labels(etiketler)’ı projeye yükleyeceğiz.

```javascript
async function loadModel() {
  model = await tf.loadGraphModel("<https://www.kaggle.com/models/google/mobilenet-v2/frameworks/TfJs/variations/035-128-classification/versions/3>", { fromTFHub: true })
  labels = await fetch("<https://storage.googleapis.com/download.tensorflow.org/data/ImageNetLabels.txt>")
  .then((res) => res.text())
  labelsArray = labels.split('\\n').map(label => label.trim()).filter(label => label !== '');
}
```

1. İlk olarak modelimizi **tf.loadGraphModel** ile birlikte [Kaggle-MobileNet-v2 by Google](https://www.kaggle.com/models/google/mobilenet-v2/frameworks/TfJs/variations/035-128-classification/versions/3) üzerinden modelimizi yüklüyoruz.

1. Bu aşamada ise **ImageNet** verisinin etiketlerini çekiyoruz ve bunu bir text formatına çeviriyoruz.

1. Son olarak ise bu text olarak aldığımız veriyi bir diziye dönüştürüp **labelsArray** değişkenine atıyoruz.

**Fonksiyon Açıklamaları**

* **tf.loadGraphModel**: **TensorFlow.js** model yükleme işlevidir. Belirtilen URL'den modeli yükler.

* **fetch**: Belirtilen URL'den veri çeker.

* **labels.split('\\n')**: Etiketleri yeni satırlara göre böler ve bir diziye dönüştürür.

* **map(label => label.trim())**: Dizi içindeki her etiketin başındaki ve sonundaki boşlukları temizler.

* **filter(label => label !== '')**: Boş etiketleri filtreler.

## 📌Görüntü Sınıflandırma Fonksiyonu

Şimdi, yüklenmiş modeli kullanarak bir görüntüyü sınıflandırmak için aşağıdaki fonksiyonu oluşturuyoruz:

```javascript
async function classifyImage(image) {
  // 1. Giriş Görüntüsünü Tensor'a Dönüştürme ve Ön İşleme
  const imgTensor = tf.browser.fromPixels(image)  // Görüntüyü Tensor'a dönüştürme
    .resizeNearestNeighbor([128, 128])  // Görüntüyü 128x128 boyutuna yeniden boyutlandırma
    .toFloat()  // Tensor değerlerini ondalık sayıya dönüştürme
    .div(tf.scalar(255))  // Normalizasyon: [0, 255] aralığındaki piksel değerlerini [0, 1] aralığına ölçekleme
    .expandDims();  // Tensor boyutunu genişletme
// 2. Model ile Görüntüyü Sınıflandırma
  const predictions = await model.predict(imgTensor);  // Modeli kullanarak sınıflandırma yapma
  // 3. En Yüksek Olasılıklı Sınıfları Belirleme ve Sıralama
  const topPredictions = Array.from(predictions.dataSync())  // Tensor'dan JavaScript dizisine dönüştürme
    .map((probability, index) => ({ probability, label: labelsArray[index]}))  // Her sınıf için olasılığı ve etiketi eşleştirme
    .sort((a, b) => b.probability - a.probability)  // Olasılığa göre sıralama
    .slice(0, 3);  // En yüksek üç olasılıklı sınıfları seçme
  // 4. Sonuçları Döndürme
  return topPredictions;  // En yüksek olasılıklı sınıfları içeren diziyi döndürme
}
```

Bu fonksiyon, bir görüntüyü alır, **TensorFlow.js** kullanarak tensor formatına çevirir ve gerekli ön işleme adımlarını uygular. Ardından, modeli kullanarak görüntüyü sınıflandırır ve en yüksek olasılıklı üç sınıfı içeren bir dizi döndürür.

1. **tf.browser.fromPixels(image)**: Giriş olarak alınan görüntüyü **TensorFlow.js**'in tensor formatına çevirir.

1. Tensor üzerinde bazı ön işlemleri yapar. Görüntüyü 128x128 boyutuna yeniden boyutlandırır, piksel değerlerini normalleştirir ve tensor boyutunu genişletir.

1. **model.predict(imgTensor)**: **TensorFlow.js** modelini kullanarak, ön işlenmiş görüntüyü sınıflandırma yapar ve olasılıklı sonuçları içeren bir tensor elde eder.

1. Elde edilen sonuçları bir JavaScript dizisine dönüştürür, her sınıfın olasılığını ve etiketini eşleştirir, olasılığa göre sıralar ve en yüksek üç olasılıklı sınıfları seçer.

1. Son olarak fonksiyon, en yüksek olasılıklı üç sınıfın etiketini ve olasılıklarını içeren bir dizi döndürür. Bu dizi, sınıflandırma sonuçlarını temsil eder.

## 📌Mockup Data Oluşturma

Projede bir sepet senaryomuz olduğu için haliyle sınıflandırdığımız öğelerin Database’den çekmemiz gerekiyor ancak bağımlığın artmaması için mockup verimizi bir JSON dosyamızın içinden okuyup gerekli bilgilerini döneceğiz.

* İlk olarak **services** adında bir klasör oluşturuyoruz **src** dizinimizin altına.

* Daha sonra services klasörümüzün altına **data.json** adında bir dosya oluşturup içini açıyoruz. Burada örnek olarak ***ImageNet*** etiketlerinde bulunan 4 adet veri ekledim bunu isterseniz arttırabilirsiniz.

```json
[
  {
    "id": "1a23bc45-678d-90ef-ghij-klmnopqrstuv",
    "name": "background",
    "price": 10.99
  },
  {
    "id": "2b34cd56-789e-01fg-hijk-lmnopqrstuvi",
    "name": "tench",
    "price": 15.99
  },
  {
    "id": "3c45de67-890f-12gh-ijkl-mnopqrstuvij",
    "name": "French loaf ",
    "price": 8.99
  },
  {
    "id": "3c45de67-890f-12gh-ijkl-mn423rstuvij",
    "name": "bread",
    "price": 12.99
  }
]
```

Bu aşamayı tamamladıktan sonra verilerimizi okuyup içerisinden sınıflandırmamızın sonucuna göre ürün bilgisini dönmesi için basit kod yapımızı oluşturacağız.

* **productService.js** adında bir dosya oluşturuyoruz. Ve bunu içerisine az önce oluşturduğumuz verilerimizi **import mockupData from './data.json**’ ile ekliyoruz.

* Buradaki verilerimiz de aslında bir basit arama yapacağımız için **searchByName** adında bir fonksiyon oluşturuyoruz

```javascript
import mockupData from './data.json';
function searchByName(query) {
  const lowerCaseQuery = query.toLowerCase();
  return mockupData.filter(item => item.name.toLowerCase().includes(lowerCaseQuery));
}
export { searchByName };
```

## 📌 Vue.js TensorFlow Görüntü Sınıflandırma

Yazının önceki aşamalarında **TensorFlow.js** ve gereksinim hazırlıklarını yaptık. Şimdi daha kolay kısmına Front End (Ön Uç) kısmına geçiyoruz. 3 tane ana component oluşturacağız. İsterseniz tek olarakta yapabilirsiniz.

**Components**

* ImageUpload.vue

* ResultDisplay.vue

* SimpleBasket.vue

**View**

* HomeView.vue

Öncelikli olarak ImageUpload.vue isminde bir component oluşturuyoruz.

İçerisine temel olarak işlevleri yerine getirebilecek bir tasarım oluşturuyoruz. Bu kısma ekstra olarak detay yada işlev eklemekte özgürüz. İsterseniz alt komponentlere de parçalayabilir daha efektif kod yazabilirsiniz 😛

### **Tasarım**

<iframe src="https://giphy.com/embed/zqy40c38GcW2LLmAf8" width="480" height="360" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

```vue
<template>
  <div class="flex flex-col items-center">
    <div class="indicator">
      <span v-if="loadingImage" class="indicator-item indicator-center indicator-middle badge badge-primary">Uploading Image...</span>
      <img :src="previewImage" alt="Input Image" class="w-96 h-96 my-2 rounded" />
    </div>
    <input type="file" accept="image/*" class="file-input w-full max-w-xs mb-2" alt="Image Input" @change="handleImageUpload" />
    <button class="btn btn-primary w-32" @click="processImage" :disabled="!isImageSelected">Classify or Recognize</button>
  </div>
</template>
```

Burada dışarıdan bir görsel alacağız. Ve bunu bir buton aracılıyla sınıflandırmasını tetikleyeceğiz.

### **Fonksiyonlar**

<iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Bu aşamada tek tek kodu açıklamanın yazıyı uzatacağını düşündüğümden tüm kod kısmını sizlerle paylaşıp işlevlerini açıklayacağım.

```javascript
import { ref, computed } from 'vue';
// tensorflowImageClassifier modülünden classifyImage ve loadModel fonksiyonlarını içeri aktarır
import { classifyImage, loadModel } from '@/utils/tensorflowImageClassifier';
// Görüntü sınıflandırma sonuçlarını tutan reaktif bir dizi oluşturur
const classificationResults = ref([]);
// Görüntü önizleme URL'sini tutan reaktif bir değişken oluşturur, başlangıçta placeholder bir URL ile ayarlanır
const previewImage = ref("<https://placehold.co/600x600>");
// Görüntünün yüklenme durumunu takip eden reaktif bir boolean değişken oluşturur
const loadingImage = ref(false);
// Vue.js'in defineEmits fonksiyonu ile bileşen içinde kullanılacak özel olayları tanımlar
const emit = defineEmits(['getResult', 'getProducts']);
// Kullanıcının bir görüntü seçip seçmediğini kontrol eden hesaplanmış bir özellik oluşturur
const isImageSelected = computed(() => previewImage.value !== "<https://placehold.co/600x600>");
// Kullanıcının bir dosya seçtiğinde tetiklenecek olan olay işleyicisi fonksiyonu
const handleImageUpload = (event) => {
  const file = event.target.files[0]; // Seçilen dosyayı alır
  const image = new Image(); // Yeni bir HTML görüntü öğesi oluşturur
  const reader = new FileReader(); // Dosya okuma işlemleri için bir FileReader oluşturur
// Dosya okuma işlemi başladığında
  reader.onloadstart = () => {
    previewImage.value = previewImage; // Önizleme görüntüsünü ayarlar (bu satırın doğru bir işlevi yok gibi görünüyor)
    loadingImage.value = true; // Görüntü yüklenme durumunu true olarak ayarlar
  };
  // Dosya okuma işlemi tamamlandığında
  reader.onloadend = () => {
    loadingImage.value = false; // Görüntü yüklenme durumunu false olarak ayarlar
    image.src = reader.result; // Görüntü öğesinin kaynağını okunan veriyle ayarlar
    previewImage.value = reader.result; // Önizleme görüntüsünü okunan veriyle ayarlar
  };
  // Dosyayı base64 formatına dönüştürerek okuma işlemini başlatır
  reader.readAsDataURL(file);
};
// Görüntü sınıflandırma işlemini başlatan olay işleyicisi fonksiyonu
const processImage = async () => {
  if (previewImage.value) { // Eğer bir önizleme görüntüsü mevcutsa
    const image = new Image(); // Yeni bir HTML görüntü öğesi oluşturur
    image.src = previewImage.value; // Görüntü öğesinin kaynağını önizleme görüntüsü URL'si ile ayarlar
    await loadModel(); // TensorFlow modelini yükler
    classificationResults.value = await classifyImage(image); // Görüntüyü sınıflandırır ve sonuçları classificationResults'a atar
    emit('getResult', classificationResults.value); // 'getResult' olayını tetikler ve sonuçları üst düzey bileşenlere iletir
    emit('getProducts', classificationResults.value); // 'getProducts' olayını tetikler ve sonuçları üst düzey bileşenlere iletir
  }
};
```

* **classificationResults**: Görüntü sınıflandırma sonuçlarımızı tutan bir dizi.

* **previewImage**: Kullanıcının yüklediği veya seçtiği görüntünün önizleme URL'sini tutan bir dize. Başlangıçta, placeholder bir URL ile başlıyor.

* **loadingImage**: Görüntünün yüklenme durumunu tutan bir boolean değeri. Başlangıçta **false** olarak ayarlı daha sonra bunu fonksiyon içerisinde durumunu güncelliyoruz.

* **isImageSelected**, kullanıcının bir görüntü seçip seçmediğini kontrol eden ve bu duruma göre "*Classify*" butonunun etkin veya etkisiz olmasına karar verecek olan computed fonksiyonumuz. Burada preview URL’sinden farklı bir durum oluşuyorsa durumunu kontrol ediyoruz.

* **handleImageUpload**: Bu fonksiyon, kullanıcının bir dosya seçtiğinde tetiklenir. Seçilen dosyanın içeriğini okur ve önizleme için kullanılabilecek bir görüntüye dönüştürür. Ayrıca, yükleme işlemi sırasında bir yükleniyor öğesini de loadingImage değerini true yaptığımız için gösterir.

* **processImage**: Bu fonksiyon, sınıflandırma işlemini başlatır. Eğer önizleme için bir görüntü mevcutsa, önceden yüklenmiş bir modeli yükler ve sınıflandırma sonuçlarını **classificationResults** değişkenine atar. Ayrıca, **emit** “*getResult*” ve “*getProducts*” ile sonuçları bir üst View’e iletiyoruz. Burada getProducts bilgisini bir üst katmanda mockup datamız içinden ürünümüzü bulmak için kullanacağız.

Son olarak sonuçları göstereceğimiz ve sepet componentimizi de oluşturuyoruz.

***ResultDisplay.vue***
```vue
<script setup>
defineProps({
  labels: Array
});
</script>

<template>
  <div class="bg-white-800 dark:bg-gray-800 p-4 my-2 rounded shadow-md">
    <h2 class="text-2xl text-slate-600 dark:text-slate-400 font-bold mb-4">Classification Result</h2>
    <ul>
      <li v-for="(result, index) in labels" :key="index" class="mb-2 p-2 border rounded">
        <span class="font-semibold text-slate-600 dark:text-slate-400">{{ result.label }}</span> - {{ (result.probability).toFixed(2) }}
      </li>
    </ul>
  </div>
</template>
```

Componentimiz de yüksek oranlı 3 ihtimallerimizi ekrana göstereceğiz. Burada 3 tane olmasının sebebi classifyImage fonksiyonumuzda slice(0,3) ile en yüksek 3 değeri alıyor olmamızdan kaynaklı. Örnek olarak, slice(0,5) olsaydı en yüksek ilk 5 ihtimali görecektik.

***SimpleBasket.vue***

```vue
<script setup>
defineProps({
  products: Array
});
</script>
<template>
  <div class="mx-auto bg-white-800 dark:bg-gray-800 rounded p-4 mt-2 shadow-md">
    <h2 class="text-xl font-semibold mb-4">Product Basket</h2>
    <div class="flex justify-between items-center border-b pb-4 mb-4" v-for="product in products" :key="product.id">
      <div>
        <h3 class="text-lg text-balance font-medium">1x {{ product.name }}</h3>
      </div>
      <div class="flex items-center">
        <span class="text-slate-600 dark:text-slate-400 font-semibold">Price: {{ product.price }}</span>
      </div>
    </div>
  </div>
</template>
```

Bu componentimiz de ise temel senaryomuzun çıkış noktası olan ürünü bulduktan sonra ve bunu sepete eklediğimiz senaryoyu içeriyor. Burada bir üst katmanımız olan HomeView.vue katmanında ürünü bulup bu componentimize bilgilerini gönderip gösterimini yapıyoruz.

***HomeView.vue***

```vue
<script setup>
import { ref } from 'vue'
import ImageUpload from '@/components/ImageUpload.vue'
import ResultDisplay from '@/components/ResultDisplay.vue'
import SimpleBasket from '@/components/SimpleBasket.vue'

const classificationResults = ref([])
const products = ref([])
const getResult = (result) => {
  classificationResults.value = result;
}
const getProducts = (result) => {
  products.value = result
};
</script>
<template>
  <ImageUpload @getResult="getResult" @getProducts="getProducts" />
  <ResultDisplay v-if="classificationResults.length > 0" :labels="classificationResults" />
  <SimpleBasket v-if="classificationResults.length > 0" :products="products" />
</template>
```
    

Ve componentlerimizi **HomeView.vue**’de çağırdıktan sonra görselimizde ki görünümü elde ediyoruz. Eğer ki görünümünüz de farkılıklar yada eksik anlatılmış yerler var ise [TF.js-with-Vue3](https://github.com/Eralpozcan/TF.js-with-Vue3) repo üzerinden kontrol edebilir. Yada direkt olarak repoyu bilgisayarınıza indirebilirsiniz. Veya isterseniz [TF.js with Vue3 Vercel](https://tf-js-with-vue3.vercel.app/) üzerinden deneyebilirsiniz.

![TensorFlow.js Sayfa Gösterimi](https://cdn-images-1.medium.com/max/5708/1*CbMt2ztPsdXle7IR5bQU4A.png)

Tüm bu aşamaları tamamladığımıza göre gelelim projemizi test etmeye. Ben örnek olarak Google’a “*French Loaf*” yazarak çıkan görsellerinden birisini tercih ettim çünkü ImageNet etiketlerinin içerisinde mevcut. Ve Mockup Datamız içerisinde tanımlamasını yaptık.

![TensorFlow.js Sınıflandıma](https://cdn-images-1.medium.com/max/5708/1*WACbtVHDdnE6UbNdvnEnlQ.png)

Resmimizi seçip yükledikten sonra “*Classify-Recognize*” butonumuza basıyoruz. Ve yüksek oranlı ilk 3 tahminimizi gösteriyoruz ve sepetimize ürünü otomatik olarak ekliyoruz.

<iframe src="https://giphy.com/embed/8c3LWBENZHRnP6ixOc" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

![TensorFlow.js Sonuçlar](https://cdn-images-1.medium.com/max/5708/1*1uyzTdpJOtoDpOMAflEzOw.png)

Gördüğümüz üzere projede **TensorFlow.js** kullanarak basit bir Nesne Tanımlama ve Sepete ekleme senaryosunu gerçekleştirdik. Ve bu sayede aslında nasıl basit bir şekilde yapay zeka ve araçlarını projelerimize yada günlük senaryolarımıza nasıl ekleyebileceğimizi görmüş olduk.

Bu yazımda **TensorFlow.js** kullanımı, kurulumunun basit bir senaryo ile nasıl faydalı olacağına dair örnekler yaparak sizlere anlatmaya çalıştım.

[Medium](https://medium.com/@eralpozcan/tensorflow-js-ve-vue-3-ile-nesne-s%C4%B1n%C4%B1fland%C4%B1rma-nas%C4%B1l-yap%C4%B1l%C4%B1r-999cdcdce9d9) yazımı okuduktan sonra [LinkedIn](https://www.linkedin.com/in/eralpozcan/) hesabımdan sorularınız yada önerileriniz var ise ulaşabilirsiniz. Diğer hesaplarım için ise [Bento.me/eralpozcan](https://bento.me/eralpozcan)🤖

Bir sonraki yazımda görüşmek üzere 📩
