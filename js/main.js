baguetteBox.run('.tz-gallery');

// the code phone call creator by Dilshod

jQuery(".contact-info div strong").text(function() {
  jQuery(this).replaceWith(
    '<a href="tel:+' + $(this).text().replace(/-/g, '').replace(/ /g, '').replace(/\./g, '').replace(/x/g, ',') + '">' + jQuery(this).text() + "</a>"
  );
});

// the code phone call creator by Dilshod