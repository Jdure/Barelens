![Bare lens Photographer](https://res.cloudinary.com/dhfp2qscl/image/upload/v1678113420/portfolio/Color_logo_with_background_uqtgow.png)

# Bare Lens Photography
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/jdure/Barelens)
![GitHub issues](https://img.shields.io/github/issues/Jdure/Barelens)

A photography portfolio website built with Next.js. 

## Description

A custom website designed for client request intake and appointment scheduling.  

### Technologies

The website was built with the following tech stack

![Next.js](	https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](	https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

With [Directus](https://directus.io/) as the content management system.

## Installation

Setup a free [Directus cloud](https://directus.cloud/) account

Clone the repository

```bash
git clone https://github.com/Jdure/Barelens.git
```

Inside the root of the project create a env.local file, add the following from Directus Cloud

```bash
DIRECTUS_PASSWORD=yourpassword
DIRECTUS_TOKEN=yourtoken
DIRECTUS_DOMAIN=yourdomain
```
In the terminal cd into the root of the repo enter npm install to install the dependencies

```bash
npm instal
```

Then npm run build, followed by npm run start to lunch the application

```bash
npm run build
npm run start
```


NOTE: **You will need to create your own content to display data from the Directus**

## Usage

To view the website visit [Bare Lens Photography](https://barelens.vercel.app/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)