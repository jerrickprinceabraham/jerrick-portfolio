# Jerrick Portfolio

A beginner-friendly, single-page portfolio website built using only HTML5, CSS3, and Vanilla JavaScript.

This project is designed for learning frontend fundamentals while creating a professional student portfolio.

## Project Description

This portfolio showcases:

- Personal introduction
- Education details
- Achievements
- Skills
- Contact information

The website is responsive, clean, and modern, with smooth scrolling, fade-in effects, active navigation highlighting, and a back-to-top button.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## Folder Structure

```text
jerrick-portfolio/
|-- index.html
|-- style.css
|-- script.js
|-- README.md
|-- assets/
|   |-- images/
|   |   |-- jerrick-profile.jpg
```

## Features

- Professional hero section with profile image and call-to-action
- About Me section with detailed profile
- Education section using responsive cards
- Achievements list
- Skills chips layout
- Contact section with clickable email, GitHub, and LinkedIn links
- Professional footer with quote and social links
- Sticky navigation with active section highlight
- Smooth scrolling across sections
- Fade-in animation for sections on scroll
- Back-to-top button
- Mobile responsive layout

## Author

Jerrick Prince Abraham

## GitHub Pages Deployment Guide

Follow these steps to publish your portfolio online.

### 1) Initialize Git (first time only)

```bash
git init
```

### 2) Add and commit your code

```bash
git add .
git commit -m "Initial portfolio website"
```

### 3) Connect your GitHub repository

Create an empty repository in GitHub named `jerrick-portfolio`, then run:

```bash
git remote add origin https://github.com/<your-username>/jerrick-portfolio.git
git branch -M main
git push -u origin main
```

### 4) Publish with GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings**.
3. Click **Pages** from the left menu.
4. Under **Build and deployment**:
	- Source: **Deploy from a branch**
	- Branch: **main**
	- Folder: **/ (root)**
5. Click **Save**.

### 5) Access your live website

After 1-2 minutes, your site will be available at:

```text
https://<your-username>.github.io/jerrick-portfolio/
```

If it does not appear immediately, refresh after a short wait.
