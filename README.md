# CTEC3905 - P15196057
**CTEC3905 Front-End Web Development - Website Project Submission**

### Website Background
This website has been created to showcase and advertise the features offered by a holiday and fishing village, South Combe Waters. The site has lodges for visitors to stay in overnight. The website allows potential visitors to see what the site has to offer and has information about each lodge to help them decide which one to book.

### Technologies

This website has been created using:
>* **HTML** - to create the page layout
>* **CSS** - to style the page
>* **JavaScript** - to add visual effects and render JSON data

>**JSON** is used to store data about the lodges held on the site at South Combe Waters. This simulates a server API response sending data from a database, and is consumed by the JavaScript to output the data on relevant pages on the website.

Images have been compressed using compressor.io to aid in faster webpage load times

### Anticipated Visitor Flow
* Use lands on index.html
* User clicks learn more then 'view our lodges'
* User finds a lodge they like
* User selects from available checkin and checkout dates
* User 'searches' for availability
* User is provided with a quote and link to book
* If user wishes to book, they are directed to a booking and payment form

There are more ways to navigate the site, e.g. navigation bar, however the site was designed so that it is easy to get from the home page all the way to completing the booking process, with minimal user interaction needed.

### Responsive Web Design
**Wireframe designs** can be found in docs/wireframes

The website looks best on a screen with a width higher than 950px.

When the screen is below 950px, the navigation menu is removed and a small tab is added to the top of the page. This is useful for mobile and tablet devices to access the navigation menu without it interfering with the rest of the page. 

On the lodge page (lodges.html), the two columns with 50% width move to 100% width and become independent blocks for easy reading on smaller devices. Additionally, the two vertical blocks become 100% width horizontal blocks.

When the screen width shrinks below 540px, the input boxes for the booking form become 100% width to allow easy accessibility on mobile devices, and the website maintains full functionality and access to the features, catering for all users.

### Remarks
Photographs used are copyright of Tonis Ael and South Combe Waters. Permission to use this content has been given.

The site is primarily optimised for use on desktops with modern browsers such as Google Chrome or Firefox. However, all components of the site are accessible on mobile/tablet devices.

### Testing
Testing has been conducted by myself using Google Chrome and Firefox web browsers.

All HTML and CSS files have been successfully tested using the W3C validation services.

| Page | Test | Expected Result | Pass/Fail
| - | - | - | -
| index.html | Book button works | Directs user to lodges.html | Pass
index.html | Learn more button works | Scrolls down to top of 'South Combe Waters' div | Pass
index.html | Read more button works | Scrolls down to top of 'Our Lakes' div | Pass
index.html | View lodges button works | Directs user to lodges.html | Pass
lodges.html | Check in box populates | Shows dates from 7 days from today | Pass
lodges.html | Check out box populates when checkin selected | Dates 7 days after checkin and up to 14 days appear as options | Pass
lodges.html | Guests box shows correct values | Option values appear for no more than the max lodge capacity | Pass
lodges.html | Search button works | Quote box appears when all fields are filled in | Pass
lodges.html | Gallery works | Gallery is populated with images of the selected lodge | Pass
lodges.html | Full screen gallery works | Image appears in full screen when clicked on | Pass
book.html | Data is populated correctly | Booking data is the same as on the previous page | Pass
book.html | Form doesn't submit when fields are missing | Warnings appear on fields that aren't filled | Pass
book.html | Form submits when button clicked | Form directs to Elizabeth Castro Show Form script | Pass
\* | Media queries are applied sitewide | Webpage content scales relative to the screen size | Pass