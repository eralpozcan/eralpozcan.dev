---
title: How to Use Object Recognition with TensorFlow.js and Vue 3?
card_description: Artificial intelligence is becoming more integrated into daily life, prompting practical use cases. This article shows how to build a simple app with TensorFlow.js and the MobileNet-v2 model to recognize objects and add them to a cart, mimicking Amazon Go. Let’s get started 🚀
date: 2024-06-31
cover: tensorflowjs.webp
ogImage: /assets/images/blog/tensorflowjs.webp
language: en
links: 
  - medium: https://medium.com/how-to-use/how-to-use-object-recognition-with-tensorflow-js-and-vue-3-57dac4a53494
  - devto:  https://dev.to/eralpozcan/how-to-use-object-recognition-with-tensorflowjs-and-vue-3-3glb
sitemap:
  lastmod: 2024-06-31
  changefreq: monthly
  priority: 0.8
  loc: http://eralpozcan.dev/blog/how-to-use-object-recognition-with-tensorflow-js-and-vue-3
---

# How to Use Object Recognition with TensorFlow.js and Vue 3?

In recent years, artificial intelligence and its products have become increasingly active and are starting to take their place in our lives, with their numbers steadily rising. We all have the question in mind of how we can use this in our daily lives. In this article, we will create a simple application together using **TensorFlow.js**, where we will use **ImageNet** classes and the **MobileNet-v2** model to recognize and add an object/item to the cart. This way, we will implement a scenario similar to the basic working principle of [Amazon Go](https://www.amazon.com/b?ie=UTF8&node=16008589011). Let’s get started 🚀

![Photo by [Mika Baumeister](https://unsplash.com/@kommumikation?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/12000/0*IjlNV6sdq3EAmX0n)*Photo by [Mika Baumeister](https://unsplash.com/@kommumikation?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

### **What is TensorFlow? What is TensorFlow.js?**

<div align="center">
<img src="https://cdn-images-1.medium.com/max/2400/1*TAiolrEtfiuEq4lMNS6OEA.png" alt="TensorFlow.js Logo Picture"> </img>
</div>

**TensorFlow** is an open-source machine learning and deep learning library developed by Google. Widely supported by a large community, **TensorFlow** is a powerful tool used for artificial intelligence applications and large-scale data processing projects. It is extensively used in both research and industrial projects, featuring a flexible and modular structure with the capability to run on different devices such as *computers, mobile devices, and IoT* devices.

**TensorFlow.js** is the JavaScript version of **TensorFlow**, enabling the training and execution of machine learning models in the browser. This makes it a suitable tool for *web applications and browser-based* artificial intelligence projects.

## Installations

Firstly, let’s create our *Vue 3* project. You can use either *Vue CLI* or *Vite* for this. I will prefer *Vite* for the installation here, but you can choose *Vue CLI* for a simplified setup with other tools.

```bash
npm create vite@latest tf-js-with-vue -- --template vue
# yarn
yarn create vite my-vue-app --template vue
# If you choice Vue CLI Commands
npm create vue@latest
```

### 📌 **Optional Installation**

If you want to use a UI or CSS library, I recommend installing it at this stage. In this example project, I used *TailwindCSS* and *DaisyUI*. If you want to follow the same structure:

* [TailwindCSS with Vite-Vue](https://tailwindcss.com/docs/guides/vite#vue)

* [DaisyUI Install](https://daisyui.com/docs/install/)

After completing the installations, go to the project directory and run **npm install** and **npm run dev** to run our empty project. If you don't encounter any issues or errors, you can proceed to add **TensorFlow.js** to your project by visiting [TensorFlow.js Installation](https://www.tensorflow.org/js/tutorials/setup).


```bash
npm install @tensorflow/tfjs
# yarn
yarn add @tensorflow/tfjs
```

## 📌 How to Use TensorFlow.js?

<iframe src="https://giphy.com/embed/MZQkUm97KTI1gI8sUj" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

To use **TensorFlow.js**, create a file named **tensorflowImageClassifier.js** under a utils folder. Inside this file, add the following code:

```javascript
import * as tf from '@tensorflow/tfjs';
let model
let labels
let labelsArray
```

Here, we imported **TensorFlow.js** with the alias “*tf*”. We then defined the variables *model*, *labels*, and *labelsArray*, which will contain the organized labels.

## 📌 Loading the Model and Labels

After these definitions, create a function named **loadModel**. In this function, we will load our model and labels into the project.

```javascript
async function loadModel() {
  model = await tf.loadGraphModel("<https://www.kaggle.com/models/google/mobilenet-v2/frameworks/TfJs/variations/035-128-classification/versions/3>", { fromTFHub: true })
  labels = await fetch("<https://storage.googleapis.com/download.tensorflow.org/data/ImageNetLabels.txt>")
  .then((res) => res.text())
  labelsArray = labels.split('\\n').map(label => label.trim()).filter(label => label !== '');
}
```

1. Firstly, we load our model using **tf.loadGraphModel** from [Kaggle-MobileNet-v2 by Google](https://www.kaggle.com/models/google/mobilenet-v2/frameworks/TfJs/variations/035-128-classification/versions/3).

1. At this stage, we fetch the labels of the *ImageNet* data and convert it into a text format.

1. Finally, we transform this text data into an array and assign it to the variable **labelsArray**.

**Function Explanations:**

* **tf.loadGraphModel**: TensorFlow.js model loading function. It loads the model from the specified URL.

* **fetch**: Fetches data from the specified URL.

* **labels.split('\\\n')**: Splits the labels by new lines and converts them into an array.

* **map(label => label.trim())**: Removes leading and trailing spaces for each label in the array.

* **filter(label => label !== '')**: Filters out empty labels.

## 📌 Image Classification Function

Now, let’s create the following function to classify an image using the loaded model:
```javascript
async function classifyImage(image) {
  // 1. Convert Input Image to Tensor and Preprocess
  const imgTensor = tf.browser.fromPixels(image)  // Convert the image to a Tensor
    .resizeNearestNeighbor([128, 128])  // Resize the image to 128x128 dimensions
    .toFloat()  // Convert Tensor values to floating-point numbers
    .div(tf.scalar(255))  // Normalization: Scale pixel values from [0, 255] to [0, 1]
    .expandDims();  // Expand the Tensor dimension
// 2. Classify the Image with the Model
  const predictions = await model.predict(imgTensor);  // Classify the image using the model
  // 3. Determine and Sort the Top Probability Classes
  const topPredictions = Array.from(predictions.dataSync())  // Convert from Tensor to JavaScript array
    .map((probability, index) => ({ probability, label: labelsArray[index]}))  // Match probability and label for each class
    .sort((a, b) => b.probability - a.probability)  // Sort by probability
    .slice(0, 3);  // Select the top three classes with the highest probabilities
  // 4. Return the Results
  return topPredictions;  // Return an array containing the top probable classes
}
```


This function takes an image, converts it to the **TensorFlow.js** tensor format, and applies necessary preprocessing steps. Then, it classifies the image using the model and returns an array containing the top three classes with the highest probabilities.

1. **tf.browser.fromPixels(image)**: Converts the input image to the **TensorFlow.js** tensor format.

1. Applies some preprocessing on the tensor. Resizes the image to 128x128 dimensions, normalizes pixel values, and expands the tensor dimension.

1. **model.predict(imgTensor)**: Uses the **TensorFlow.js** model to classify the preprocessed image and obtains a tensor containing probabilistic results.

1. Converts the obtained results to a JavaScript array, matches the probability and label for each class, sorts by probability, and selects the top three classes with the highest probabilities.

1. Finally, the function returns an array containing the labels and probabilities of the top three classes. This array represents the classification results.

## 📌 Creating Mockup Data

Since we have a shopping cart scenario in the project, we need to retrieve the classified items from the database. However, to keep dependencies minimal, we will read our mockup data from a JSON file and return the necessary information.

* First, create a folder named **services** under the **src** directory.

* Then, create a file named **data.json** inside the **services** folder and open it. I added four pieces of data as an example based on ImageNet labels, but you can increase this as needed.

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


After completing this stage, we will create a simple code structure to read our data and return product information based on the result of the classification.

* Create a file named **productService.js**. Import the mockup data into this file using **import mockupData from './data.json'**.

* Since we will perform a simple search on our data, create a function named **searchByName**.


```javascript
import mockupData from './data.json';
function searchByName(query) {
  const lowerCaseQuery = query.toLowerCase();
  return mockupData.filter(item => item.name.toLowerCase().includes(lowerCaseQuery));
}
export { searchByName };
```
## 📌 Vue.js Image Recognition with TensorFlow

In the previous stages of the tutorial, we prepared **TensorFlow.js** and the necessary requirements. Now, let’s move on to the easier part, the Front End. We will create three main components. You can also create them as a single component if you prefer.

**Components**

* ImageUpload.vue

* ResultDisplay.vue

* SimpleBasket.vue

**View**

* HomeView.vue

Firstly, we create a component named **ImageUpload.vue**.

We design it with the essential functionalities. Feel free to add extra details or functions. You can also break it down into sub-components for more efficient code 😛

### **Design**

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

Here, we will take an image from the user and trigger its classification/recognition through a button.

### **Functions**

<iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

In this stage, instead of explaining the code step by step, I’ll share the entire code with you and explain its functions.

```javascript
import { ref, computed } from 'vue';
// Import the classifyImage and loadModel functions from the tensorflowImageClassifier module
import { classifyImage, loadModel } from '@/utils/tensorflowImageClassifier';
// Create a reactive array to hold image classification results
const classificationResults = ref([]);
// Create a reactive variable to hold the preview image URL, initially set with a placeholder URL
const previewImage = ref("<https://placehold.co/600x600>");
// Create a reactive boolean variable to track the loading status of the image
const loadingImage = ref(false);
// Define custom events to be used within the component using the defineEmits function of Vue.js
const emit = defineEmits(['getResult', 'getProducts']);
// Create a computed property to check whether the user has selected an image
const isImageSelected = computed(() => previewImage.value !== "<https://placehold.co/600x600>");
// Event handler function triggered when the user selects a file
const handleImageUpload = (event) => {
  const file = event.target.files[0]; // Get the selected file
  const image = new Image(); // Create a new HTML image element
  const reader = new FileReader(); // Create a FileReader for file reading operations
  // When the file reading process starts
  reader.onloadstart = () => {
    previewImage.value = previewImage; // Set the preview image (this line seems to have no correct function)
    loadingImage.value = true; // Set the image loading status to true
  };
  // When the file reading process is completed
  reader.onloadend = () => {
    loadingImage.value = false; // Set the image loading status to false
    image.src = reader.result; // Set the source of the image element with the read data
    previewImage.value = reader.result; // Set the preview image with the read data
  };
  // Start the reading process by converting the file to base64 format
  reader.readAsDataURL(file);
};
// Event handler function that initiates image classification
const processImage = async () => {
  if (previewImage.value) { // If a preview image is available
    const image = new Image(); // Create a new HTML image element
    image.src = previewImage.value; // Set the source of the image element with the preview image URL
    await loadModel(); // Load the TensorFlow model
    classificationResults.value = await classifyImage(image); // Classify the image and assign the results to classificationResults
    emit('getResult', classificationResults.value); // Trigger the 'getResult' event and pass the results to upper-level components
    emit('getProducts', classificationResults.value); // Trigger the 'getProducts' event and pass the results to upper-level components
  }
};
```


* **classificationResults**: An array holding the results of image classification.

* **previewImage**: A string holding the URL of the user-uploaded or selected image for preview. Initially starts with a placeholder URL.

* **loadingImage**: A boolean variable indicating the loading status of the image. Initially set to **false** and updated within the function.

* **isImageSelected**: A computed property checking whether the user has selected an image, determining the enable/disable status of the "*Classify*" button. It checks if the preview URL is different from the placeholder.

* **handleImageUpload**: This function is triggered when the user selects a file. It reads the content of the selected file and converts it into an image for preview. It also shows a loading element while the image is being loaded.

* **processImage**: This function initiates the image classification process. If a preview image is available, it loads a pre-trained model and classifies the image. The results are stored in **classificationResults**, and events (*getResult* and *getProducts*) are emitted to pass the results to upper-level components.

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

In this component, we will display the top 3 probabilities on the screen. The reason for having 3 probabilities is that in our **classifyImage** function, we use **slice(0,3)** to take the top 3 probabilities. For example, if it were **slice(0,5)**, we would see the top 5 probabilities.

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


In this component, we handle the scenario of finding the product and adding it to the basket after our basic scenario. Here, in our upper layer, which is the **HomeView.vue** layer, we find the product, send its information to this component, and display it.

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

After calling our components in **HomeView.vue**, we obtain the appearance in our visualization. If there are any differences or missing parts in your view, you can check [TF.js-with-Vue3](https://github.com/Eralpozcan/TF.js-with-Vue3) for the repository. Alternatively, you can download it directly to your computer. Or, if you prefer, you can try [TF.js with Vue3 on Vercel](https://tf-js-with-vue3.vercel.app/).

![TensorFlow.js Preview](https://cdn-images-1.medium.com/max/5708/1*CbMt2ztPsdXle7IR5bQU4A.png)

Now that we have completed all these stages, let’s move on to testing our project. As an example, I chose one of the images that appear when searching for **“French Loaf”** on Google because it is available within the **ImageNet** labels. We have also defined its classification in our Mockup Data.

![TensorFlow.js Recognition](https://cdn-images-1.medium.com/max/5708/1*WACbtVHDdnE6UbNdvnEnlQ.png)

After selecting and uploading our image, we press the “*Classify-Recognize*” button. We then display the top 3 predictions with high probabilities and automatically add the item to our basket.

<iframe src="https://giphy.com/embed/8c3LWBENZHRnP6ixOc" width="480" height="480" style="" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

![Tensorflow.js Results](https://cdn-images-1.medium.com/max/5708/1*1uyzTdpJOtoDpOMAflEzOw.png)

As we can see, we implemented a simple Object Recognition and Add to Cart scenario using **TensorFlow.js** in the project. Through this, we explored how we can easily integrate artificial intelligence and tools into our projects or daily scenarios.

In this article, I tried to explain the usage and installation of **TensorFlow.js** with examples of how it can be beneficial in a simple scenario.

After reading my [Medium](https://medium.com/how-to-use/how-to-use-object-recognition-with-tensorflow-js-and-vue-3-57dac4a53494) post, feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/eralpozcan/) if you have any questions or suggestions.For my other accounts, you can visit [Bento.me/eralpozcan](https://bento.me/eralpozcan)🤖

See you in the next article! 📩
