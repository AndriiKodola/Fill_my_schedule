/**
 * Provides deep comparison of two objects. May cause unexpected results with objects containing functions
 * 
 * @param {*} obj1 
 * @param {*} obj2 
 * 
 * @returns {boolean}
 */
const indentical = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return Object.is(obj1, obj2);
  }

  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    if (obj1.length === obj2.length) {
      obj1.forEach(( el, idx ) => {
        if (!indentical(obj1[idx], obj2[idx])) {
          return false;
        }
      });
    } else {
      return false; 
    }
  } else {
    const obj1keys = Object.keys(obj1);
    const obj2keys = Object.keys(obj2);
    if (obj1keys.length === obj2keys.length) {
      obj1keys.forEach(( key, idx ) => {
        if (obj1keys[idx] !== obj2keys[idx]) {
          return false; 
        }
      });
    } else return false;


    for (let prop in obj1) {
      if (typeof obj1[prop] === 'undefined') {
        throw TypeError(`Property ${prop} of ${obj1} is undefined`);
      } else if (typeof obj2[prop] === 'undefined') {
        throw TypeError(`Property ${prop} of ${obj2} is undefined`);
      } else if (typeof obj2[prop] === 'NaN') {
        throw TypeError(`Property ${prop} of ${obj2} is NaN`);
      } else if (typeof obj2[prop] === 'NaN') {
        throw TypeError(`Property ${prop} of ${obj2} is NaN`);
      }
  
      if (typeof obj1[prop] !== typeof obj2[prop]) {
        return false;
      } else {
        if (typeof obj1.prop === 'object') {
          if (!indentical(obj1[prop], obj2[prop])) {
            return false;
          }
        } else if (Object.is(obj1[prop], obj2[prop])) {
          return false;
        }
      }
    }
  }

  return true;
}

/**
 * Updates first recursively found property to the given value
 * 
 * @param {object} object
 * @param {string} propName 
 * @param {*} value 
 * 
 * @returns {object} object with updated proerty
 */
const updateProp = (object, propName, value) => {
  if (Number.isNaN(value)) value = 0;
  if (typeof object !== 'object') {
    throw TypeError(`Passed argument ${object} is not an object`);
  }

  if (Array.isArray(object)) {
    for (let el of object) {
      if (typeof el === 'object') {
        if (updateProp(el, propName, value)) return true;
      }
    }
  } 

  for (let prop in object) {
    if (typeof object[prop] !== 'object' && prop === propName) {

      object[propName] = value;
      return true;

    } else if (typeof object[prop] === 'object') {
      if (updateProp(object[prop], propName, value)) return true;
    }
  }

  return false;
}

/**
 * Updates first recursively found properties to the given values
 * 
 * @param {object} object
 * @param {[string]} propNames
 * @param {[*]} values
 * 
 * @returns {object} object with updated proerties
 */
const updateProps = (object, propNames, values) => {
  propNames.forEach((propName, idx) => {
    object = updateProp(object, propName, values[idx]);
  });
  return object;
}

/**
 * Rounds given number to the given decimal numbers
 * 
 * @param {number} number
 * @param {int} decPlaces - desired number of decimal places
 * 
 * @returns {number} - rounded number
 */
const round = (number, decPlaces) => {
  if (decPlaces < 0) {
    throw new RangeError('The argument decimal places must be non-negative');
  }
  if (decPlaces % 1 !== 0) {
    throw new RangeError ('The argument decimal places must be a whole number');
  }
  const decPlacesShift = decPlaces === 0 ? 1 : decPlaces * 10;
  return Math.round(number * decPlacesShift) / decPlacesShift;
}

export { 
  indentical,
  updateProp,
  updateProps,
  round
};
