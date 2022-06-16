
module.exports = {
  provinces: [
    {
      text: 'Alberta',
      value: 'AB',
    },
    {
      text: 'British Columbia',
      value: 'BC',
    },
    {
      text: 'Manitoba',
      value: 'MB',
    },
    {
      text: 'New Brunswick',
      value: 'NB',
    },
    {
      text: 'Newfoundland and Labrador',
      value: 'NL',
    },
    {
      text: 'Northwest Territories',
      value: 'NT',
    },
    {
      text: 'Nova Scotia',
      value: 'NS',
    },
    {
      text: 'Nunavut',
      value: 'NU',
    },
    {
      text: 'Ontario',
      value: 'ON',
    },
    {
      text: 'Prince Edward Island',
      value: 'PE',
    },
    {
      text: 'Quebec',
      value: 'QC',
    },
    {
      text: 'Saskatchewan',
      value: 'SK',
    },
    {
      text: 'Yukon Territory',
      value: 'YT',
    }
  ],

  rules: {
    email: [
      v => !!v || 'Email is required',
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
    ],
    NAPhone: [
      v => !v || /^(\+?1 |)\(\d\d\d\) \d\d\d\-\d\d\d\d$/.test(v) || 'Phone must be valid and include area code'
    ],
    internationalPhone: [
      v => !v || /^\+\d+ [\d\s\-\(\)]{5,15}$/.test(v) || 'Phone must be valid and include country and area code'
    ],
    phone: [
      v => !v || /^(\+\d+ |)\(?\d\d\d(\) | |-)\d\d\d(\-| )\d\d\d\d$/.test(v) || 'phone must include area code eg 604 123-4567'
    ],
    username: [
      v => !!v || 'Name is required',
      v => v && v.length >= 3 && v.length <= 16 || 'Name must be between 3 and 16 characters',
      v => /^[a-zA-Z0-9]+$/.test(v) || 'Name may only contain alphanumeric characters'      
    ],
    password: [
      v => !!v || 'Password is required',
      v => v && v.length >= 8 || 'Password must be at least 8 characters'
    ]
  }
}
