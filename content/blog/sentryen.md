---
title: How to Use Sentry with Vue 3?
date: 2023-06-26
cover: sentry.webp
language: EN
links: 
  - medium: https://medium.com/@eralpozcan/how-to-use-sentry-with-vue-3-a8495d482672
  - devto:  https://dev.to/eralpozcan/how-to-use-sentry-with-vue-3-2bi2
---

# How to Use Sentry with Vue 3?

Don’t we often encounter errors and find it difficult to identify them? One of the error and performance monitoring tools is Sentry. In this article, I will explain how to set up Sentry and make improvements with performance monitoring. Are you ready? Let’s get started! 🚀

## **What is Sentry?**

![Sentry](https://cdn-images-1.medium.com/max/2000/1*KPMnUpwtjAJ_97NZO50Lew.png)

If we need to provide a general description, **Sentry** is an error tracking and reporting platform for many of our applications, and we can even add that it's a performance reporting platform.

Sentry allows developers to monitor application errors in real-time, receive and analyze error reports, and quickly diagnose issues.

The **key features** of Sentry include:


1. **Error Tracking**: Sentry tracks and captures errors in applications. It can detect various types of errors such as exceptions, error messages, errors in the user interface, and more.

2. **Real-time Monitoring**: Sentry monitors application errors in real-time and sends notifications promptly. This allows developers to quickly notice mistakes and take action.

3. **Error Reporting**: Sentry reports errors in detail. Error reports provide crucial information about when, where, and under what conditions the error occurred. This helps developers diagnose and fix errors.

4. **Integrations**: Sentry supports many popular programming languages and various platforms. This allows it to integrate with different types of applications and systems.

5. **Performance Monitoring**: Sentry can monitor the performance of applications and detect performance issues. With performance monitoring features, developers can optimize the performance of their applications and enhance the user experience. ***We’ll even provide an example in this regard*** 😉



*Additionally, in addition to the basic explanation provided here, I recommend reading Onur Dayıbaş’s Medium article titled [Some Concepts in Sentry](https://medium.com/frontend-development-with-js/sentrydeki-baz%C4%B1-kavramlar-project-env-release-ve-sourcemap-2a041395c43b)*



## Installation

Firstly, I will support the steps we will take here with visuals. Sentry itself will also provide us with sufficient assistance in this regard.

📌 Go to  **[Sentry](https://sentry.io/)**’s website and create an account if you don’t have one, or log in if you already have an account.

📌 If you’re logging in for the first time, you’ll be prompted to create an organization. One of the main reasons for this is to enable collaboration with your team members. In this example, I’ll skip this step by creating an organization named “*Example*”.


![Create Sentry Organization](https://cdn-images-1.medium.com/max/2000/1*4f-HuN-NdMT71Tk04eEAeg.jpeg)

📌 We are presented with a screen where we can choose the platform we want to set up. Here, we select **Vue**.

![Choose Platform](https://cdn-images-1.medium.com/max/3338/1*LrfmXgglYv3nRt3MrQrMng.jpeg)

📌 Here, we select the alert frequency. We can adjust this setting later, but for now, we select the option “*Alert me on every new issue.*” Then, we proceed to the next step, where we create our project and choose our team. If you don’t have a team, by default, it will use the name of your organization as the team. If you want to create a different team, you can click on the “+” sign to create one. Finally, we click on “*Create Project.*”

![Create Project with alert frequency](https://cdn-images-1.medium.com/max/3380/1*-L3H4uW2SZgSvkJNrl817w.jpeg)

📌 Here, **Sentry** provides us with instructions. It automatically adjusts settings based on three main scenarios. Some important points to understand are as follows:


1. **Error Monitoring**: This is our error monitoring setting. It is selected by default, and we cannot disable it because that’s our primary goal 😉
2. **Performance Monitoring**: Here, we measure the performance of our page load. If we don’t want this option, we can remove it.

3. **Session Replay**: This is actually one of the features we love. It provides a small video snippet showing how errors occurred. However, it is not recommended to collect these data at high rates. It’s sufficient to enable it only for errors.

![Install Configure](https://cdn-images-1.medium.com/max/3318/1*70xw3bqMfOfL130UIlSdDw.jpeg)

Let’s move on to the installation process. As shown in the screenshot above, we install the **Sentry** package in our project using either “*npm*” or “*yarn*” depending on our preference. Then, we directly copy the Vue3 sample code and paste it into our “*main.js*” file. Of course, you may have a different “*main.js*” file in your project. The important point here is to include the portion starting with ```Sentry.init({])``` (*Don’t forget to import it*). The key settings and their meanings in this configuration are as follows:


* **App**:  It is used to specify the application object, which is the application we created with createApp or the application we want to monitor.

* **dns:** The address of the Sentry server where error reports will be sent. I recommend keeping this address in a secure manner, such as using a .env file. Exposing this address can lead to potential security issues.

* **integrations**: It is used to configure Sentry integrations. In this example, ```Sentry.BrowserTracing``` and ```Sentry.Replayintegrations``` are used.

* **tracesSampleRate**: Performance monitoring sample rate. It is expressed as a percentage, and in this example, it is set to **100%** It is recommended to lower this rate in real production environments.

* **replaysSessionSampleRate**: Session replay sample rate. It is expressed as a percentage, and in this example, it is set to **10%**. During development, it can be set **100%** for better analysis, while in production, a lower sampling rate can be used.

* **replaysOnErrorSampleRate**: Sample rate for sessions with errors. If you are not already sampling sessions, you can set the sampling rate for sessions with errors to **100%**


For more advanced configuration options that are not shown in the screenshot, you can refer to the [*Sentry Basic Options*](https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/?original_referrer=https%3A%2F%2Fvueschool.io%2F&utm_campaign=evergreen-vue-school-course-2022&utm_medium=partner&utm_source=vueschool) in the documentation to make detailed adjustments. Essentially, we have completed the basic installation process here. Now, let’s see how we can capture our **first error**.


## Issues

After completing the installations, **Sentry** automatically redirects us to a page like the one below and expects us to send our errors. In fact, we will see or track all the errors here.

![Sentry Issues Page](https://cdn-images-1.medium.com/max/3786/1*Kn4dZSqzZFClgWi6WZ7rew.jpeg)


> How can we send this error or different data to Sentry? *🤔*

👩‍💻 We are creating a simple button and function.

```js
  <button @click="sendSentryData">Click me</button>

  function sendSentryData() {
    Sentry.captureMessage('Button clicked');
  }
```


If you haven’t imported and initialized **Sentry** when creating this function, you will receive the error shown in the image below.

![Sentry ReferenceError](https://cdn-images-1.medium.com/max/2524/1*vemyluI6ZEEpZ0vCFi1TVA.jpeg)

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcWpxbTN3b3Z5aXdiMjBraWNnb3N4OXphYzRmNjF0anZwcHR5eG4xbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/JqDeI2yjpSRgdh35oe/giphy.gif" loading="lazy" alt="Ta daa Friends Gif"></img>

![Show Reference Error in Issues](https://cdn-images-1.medium.com/max/3800/1*4BK7hzeNWYzqCm0sEHqTyQ.jpeg)
> **We encountered our first error! So how did this happen?**

Because we encountered a reference error at its core, and since our **replaysOnErrorSampleRate** value is set to 100%, Sentry detected it and sent it to us directly. By clicking on its content, we can learn more about the occurrence of the error or get detailed information. However, to keep it brief, I won’t go into that here. We received the error because we hadn’t defined Sentry. To resolve this, we add the code ```import * as Sentry from '@sentry/vue' ``` to our script and click the button again. 🖱️


![Issueses](https://cdn-images-1.medium.com/max/3340/1*GnbJRVuMPRMBh2cLLlznxw.jpeg)

As you can see, we can also view the message we sent. One important aspect here is that we can see how many times this error occurred and how many users experienced it. The “*Events*” count shows how many times the error occurred, while the “*Users*” count indicates how many different users encountered this issue. By clicking into the error, we can access more detailed information. Essentially, we have successfully performed a basic error and data reporting process. Now, let’s move on to performance analysis.

## Performance Monitoring

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhibDhtZXYyNjh5ampvY2x4ZjRlYnM1ZG1qMnIydmMyOXZ0M20yNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rM0wxzvwsv5g4/giphy.gif" loading="lazy"></img>

As you know, one of the important aspects for all of us is the page loading speed, in other words, the performance of our project. We mentioned that with **Sentry**, it is possible to analyze this performance. If we selected the Performance Monitoring option during the installation process, we actually gain some speed in the setup phase. When we return to our “*main.js*” file, we will see thee **BrowserTracing** and **tranceSampleRate** values. In BrowserTracing, the adjustments we make involve entering the addresses of our domains. “*localhost*” is set as the default. Additionally, we need to add the address of the deployed application.

![](https://cdn-images-1.medium.com/max/2074/1*iAxm524BfUalKzVQgyP5Bg.jpeg)

I have added the example “[*https://moviepal.vercel.app*](https://moviepal.vercel.app)“ as you mentioned. This way, I will be able to measure its performance even in the deployed state.

Another value we have is **tranceSampleRate**, and it is recommended to lower this value in production environments. However, if you are doing local development, it is recommended to set this value to **1.0**. This way, you will be able to analyze all page reloads.


> **How will performance monitoring be beneficial for us? Let’s see it in practice.**

<img loading="lazy" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExODB2d2didDNqYzh0cWl5YWd2ZTFncG1zaW0ycW9ia3VqaXhrY21qeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2IudUHdI075HL02Pkk/giphy.gif"></img>

In fact, while working on this project, I was monitoring the performance metrics. And then I realized that the page loading was taking longer due to the images. I was using **UseImage** for this purpose, thinking it would be effective, but it doesn’t seem to be the case.

📌 I have shared the development examples I made here on [**Gist**](https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430)

![](https://cdn-images-1.medium.com/max/3346/1*YbGalxlbV7SLVzmxpncoZg.jpeg)

📌 The first thing I did here was to remove [UseImage](https://vueuse.org/core/useImage/) and use a regular Img tag to observe the situation.

![](https://cdn-images-1.medium.com/max/3326/1*FIKgAMgISoZUcwaMtBuhYQ.jpeg)

📌 As you can see, there is some improvement in our metrics. Although the *CLS* value has increased, other parameters show a decrease of over **50%**. Next, I enable the lazy loading feature of Swiper and the lazy attribute of the img tag. This leads to a significant decrease in our *TTFB* value.

![](https://cdn-images-1.medium.com/max/3312/1*3UqIPltOhomjiLorbHV-dg.jpeg)

📌 Then, as observed in the images, I notice that *CSS* files are being repeatedly imported and loaded within the components. I address this by globally importing them into the root directory of our project. This way, there will be no need to load them repeatedly on this page.

![](https://cdn-images-1.medium.com/max/3320/1*4PBTiuyqpEBY7mV_yjWsMQ.jpeg)

> You can find a table below that shows the processes we do in a more comparable way.👇


|         Process          | Swiper CSS Imported | Event Duration |   CLS   |   FCP   |   FP    |   LCP   |  TTFB   | Gist |
|--------------------------|---------------------|----------------|---------|---------|---------|---------|---------|------|
| **Swiper with UseImage**     | Yes                 | 2.93s          | 0.226   | 733.4ms | 733.4ms | 1.207s  | 80.20ms | [Swiper with UseImage](https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430#file-swiper1useimage-vue) |
| **Swiper with Img Tag**      | Yes                 | 2.67s          | 0.392   | 383.4ms | 383.4ms | 1.157s  | 35.60ms | [Swiper with Img Tag](https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430#file-swiper2img-vue) |
| **Swiper with Img and Lazy** | Yes                 | 2.06s          | 0.253 | 391ms   | 391ms   | 791.5ms | 18.60ms | [Swiper with Img and Lazy](https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430#file-swiper3imglazy-vue) |
| **Swiper with Img and Lazy** | No                  | 1.78s          | 0.218 | 312.9ms | 312.9ms | 693.7ms | 8ms     | [Swiper with Img and Lazy without CSS](https://gist.github.com/Eralpozcan/ae1f7d40b16b8420d4ab3f0ac6b6b430#file-swiper4imglazycss-vue) |



***Swiper CSS Imported:** Indicates whether the Swiper CSS is being reloaded within the page. If the value is “No”, it means that it has been imported into the project’s root directory as well.*

> If you feel that your knowledge about abbreviations and metrics is not sufficient, Google [web.dev](https://web.dev/metrics/) can be helpful for you.

As has seen, we created a simple example using **Sentry**’s *Performance Monitoring* tool and optimized our code. Of course, there are different optimization methods available, but here we made some basic improvements and significantly increased our page loading speed through **Sentry**.

> ## **With these optimizations, we were able to increase our page loading speed by approximately 60%**.


In this article, I have tried to explain the usage and installation of **Sentry** and how it can be beneficial to us by providing examples.

After reading my Medium post, feel free to reach out to me on my [Linkedin ](https://www.linkedin.com/in/eralpozcan/) account if you have any questions or suggestions.

See you in my next article! 📩