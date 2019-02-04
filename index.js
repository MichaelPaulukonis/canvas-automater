const puppeteer = require('puppeteer');
// const suppliedText = 'What words? Deadlocked. Explosion. Tangible flippant excesses. Pickle. Noodle noodle noodle.'

// https://intoli.com/blog/saving-images/

(async () => {
    // Set up browser and page.
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setViewport({ width: 1280, height: 926 });

    // NOTE: spins up a new instance, not the one were using in the browser
    // OBVIOUSLY (he said, with chagrin)
    // SO - build something that auto-paints.
    // oh. like with the image-texter, yah?
    // const url = `http://127.0.0.1:8080/?text=${suppliedText}&autoPaintGrid=true&autoSave=true`;
    const url = `http://127.0.0.1:8080/?text=foo&autoPaintGrid=true&autoSave=true`;

    // Navigate to this blog post and wait a bit.
    await page.goto(url);

    // wait for something that says rendering is done
    // will have to add something

    await page.waitForSelector('#defaultCanvas0');

    // Select the #svg img element and save the screenshot.
    const svgImage = await page.$('#defaultCanvas0');
    await svgImage.screenshot({
        path: 'logo-screenshot.png',
        omitBackground: true,
    });

    await browser.close();
})();