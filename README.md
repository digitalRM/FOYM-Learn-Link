
![Learn Link](https://github.com/user-attachments/assets/28ea0106-023a-4b7d-822d-485bae8d255f)

Template Series - Learn Link #5
---
his is a template for organizations modeled after a made-up tutoring nonprofit called “Learn Link.” It is entirely free to use and customize. Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.

![Website Image](https://github.com/user-attachments/assets/69274ba4-70ff-4929-ad16-975eb544acd2)

This is the fifth fully open-source template we have created. This is a template for organizations modeled after a made-up tutoring nonprofit called “Learn Link.” It features an animated hero section via Framer Motion, two informational sections, and frequently asked questions. - Ruslan

Getting Started
---

To get a local copy up and running, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- An IDE

### Installation

Clone the repository

```bash
git clone https://github.com/digitalRM/FOYM-Learn-Link.git
```

Install required packages

```bash
npm install
```

Customize the entire website across all the sections inside the `components/sections` folder
```js
1 - Hero.jsx
2 - StudentSection.jsx
3 - OurVolunteers.jsx
4 - FAQ.jsx
5 - Footer.jsx
```

There are also important files to edit in the `components/ui` folder. They are all marked with 1 in the front. 
```js
1 - contact-dialog.jsx
1 - header.jsx
1 - mobile-drawer.jsx
1 - studentChart.jsx
```

Delete Banner in `app/layout.js`

```js
// Delete this import below when you are ready to remove the banner
import Banner from "@/components/sections/999 - banner";

{/* This is the banner for the FOYM website. Feel free to delete this! */}
<Banner />
```
Delete Banner from the `components/sections` folder
```js
999 - banner.jsx
```

Customize your metadata in `app/layout.js`
```js
// This is the metadata for the website. Change the values to match your website. Upload the openGraph.png to your public folder
export const metadata = {
  metadataBase: new URL('https://learn.foym.org/'),
  title: "Learn Link - An FOYM Template",
  description: "This is a template for organizations modeled after a made-up tutoring nonprofit called “Learn Link.” It is entirely free to use and customize. Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.",
  openGraph: {
    title: "Learn Link - An FOYM Template",
    description: "This is a template for organizations modeled after a made-up tutoring nonprofit called “Learn Link.” It is entirely free to use and customize. Created by FOYM, a project by Ruslan Mukhamedvaleev, under the MIT license.",
    url: 'https://learn.foym.org/',
    siteName: 'Learn Link - An FOYM Template',
    images: [
      {
        url: '/openGraph.png',
        width: 1600,
        height: 900,
        alt: 'An image of the website\s name "Learn Link - An FOYM Template" and star like characters in the background pointing at the name',
      },
    ], 
    locale: 'en_US',
    type: 'website',
  },
}
```

Run the development server

```bash
npm run dev
```

## Contact 

If you are having trouble setting this up, please feel free to contact me via the [foym](https://www.foym.org) website. 

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.


