/*
 * MEDORA REAL ESTATE
 * ------------------
 * To add or update a property:
 * 1. Add one listing object inside the listings array.
 * 2. Give it a unique id and update the text.
 * 3. Keep only verified, publish-ready property details here.
 * 4. When listings is empty, the public "Current properties" section stays hidden.
 *
 * The Real Estate page updates automatically from this file.
 */
window.MEDORA_REAL_ESTATE = {
  featured: {
    kicker: "Featured availability",
    title: "Real estate listings are being refreshed.",
    description:
      "Current opportunities are being verified before publication. Please contact our team for the latest availability and viewing options.",
    ctaLabel: "Enquire now",
    enquiry: "Real estate enquiry"
  },
  listings: [
    /*
     * Publish a real listing by removing this comment and filling one object:
     *
     * {
     *   id: "mallappally-villa-plot",
     *   title: "Villa Plot in Mallappally",
     *   location: "Mallappally",
     *   type: "Residential plot",
     *   statusLabel: "Available",
     *   summary: "Short public description of the verified property.",
     *   facts: [
     *     { label: "Area", value: "12 cents" },
     *     { label: "Price", value: "On request" },
     *     { label: "Status", value: "Open for enquiry" }
     *   ],
     *   ctaLabel: "Request details",
     *   enquiry: "Villa plot in Mallappally enquiry"
     * }
     */
  ]
};
