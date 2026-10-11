/**
 * Sunil Tours N Travels — WhatsApp Integration Helper
 * Business WhatsApp Number: +91 8197007359
 * WhatsApp URL: https://wa.me/918197007359
 */

export const WHATSAPP_NUMBER = '918197007359';

/**
 * Opens WhatsApp with a prefilled message.
 * Reusable helper across the entire website.
 * @param {string} message - Prefilled text message
 */
export function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

/**
 * Builds prefilled message for Sightseeing Package enquiries
 */
export function buildPackageWhatsAppMessage({
  packageName,
  travelDate,
  numberOfTravellers,
  pickupLocation,
  specialRequests
}) {
  const lines = [
    'Namaste Sunil Tours N Travels! I am interested in booking the following sightseeing package.',
    '',
    `Package: ${packageName || 'Sightseeing Package'}`
  ];

  if (travelDate) {
    lines.push(`Travel Date: ${travelDate}`);
  }
  if (numberOfTravellers) {
    lines.push(`Number of Travellers: ${numberOfTravellers}`);
  }
  if (pickupLocation) {
    lines.push(`Pickup Location: ${pickupLocation}`);
  }
  if (specialRequests) {
    lines.push(`Special Requests: ${specialRequests}`);
  }

  lines.push('');
  lines.push('Please share the itinerary, final vehicle charges, availability, and booking details.');

  return lines.join('\n');
}

/**
 * Builds prefilled message for Vehicle Hire enquiries
 */
export function buildVehicleWhatsAppMessage({
  vehicleType,
  travelDate,
  passengers,
  pickup,
  drop,
  duration,
  additionalRequirements
}) {
  const lines = [
    'Namaste! I would like to enquire about vehicle hire with Sunil Tours N Travels.',
    '',
    `Vehicle Type: ${vehicleType || 'Sightseeing Vehicle'}`,
    `Travel Date: ${travelDate || 'Flexible / To be confirmed'}`,
    `Passengers: ${passengers || 'To be confirmed'}`,
    `Pickup: ${pickup || 'Chikkamagaluru'}`,
    `Drop: ${drop || 'Chikkamagaluru'}`,
    `Duration: ${duration || '1 Day'}`
  ];

  if (additionalRequirements) {
    lines.push(`Additional Requirements: ${additionalRequirements}`);
  }

  lines.push('');
  lines.push('Please confirm availability and the total quotation.');

  return lines.join('\n');
}

/**
 * Builds prefilled message for Student, Corporate, Family, and Group tours
 */
export function buildGroupTourWhatsAppMessage({
  groupType,
  groupSize,
  travelDate,
  duration,
  pickupLocation,
  requirements,
  notes
}) {
  const lines = [
    'Namaste! I would like a customized group tour quotation.',
    '',
    `Group Type: ${groupType || 'Group Tour'}`,
    `Group Size: ${groupSize || 'To be confirmed'}`,
    `Travel Date: ${travelDate || 'To be confirmed'}`,
    `Duration: ${duration || '1 Day'}`,
    `Pickup Location: ${pickupLocation || 'Chikkamagaluru'}`,
    `Requirements: ${requirements || 'Transport & Sightseeing'}`
  ];

  if (notes) {
    lines.push(`Additional Notes: ${notes}`);
  }

  lines.push('');
  lines.push('Please share the available options and final quotation.');

  return lines.join('\n');
}

/**
 * Builds prefilled message for Destination enquiries
 */
export function buildDestinationWhatsAppMessage(destinationName) {
  return `Namaste Sunil Tours N Travels! I am interested in visiting ${destinationName}. Please share sightseeing package options, vehicle rates, and available dates.`;
}

/**
 * General trip enquiry builder
 */
export function buildGeneralTripWhatsAppMessage(topic = 'Chikkamagaluru Trip') {
  return `Namaste Sunil Tours N Travels! I would like to plan a ${topic}. Please share your available tour packages, vehicle options, and quotation.`;
}
