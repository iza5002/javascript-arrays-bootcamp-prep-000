///*global describe, it */

//  'chocolateBars'
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
  


//describe('addElementToBeginningOfArray(array, element)', () => {
function addElementToBeginningOfArray(array, element) {
    return [element, ...array]
    
}

  //describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}

//describe('addElementToEndOfArray(array, element)', () => {
function addElementToEndOfArray(array, element) {
     return [array, ...element]
    }

//describe('destructivelyAddElementToEndOfArray(array, element)', () => {
function destructivelyAddElementToEndOfArray(array, element) {
    array.push(element)
    return array
    }

//describe('accessElementInArray(array, index)', () => {
function accessElementInArray(array, index) {
      return array[index]
    }
  
//describe('destructivelyRemoveElementFromBeginningOfArray(array)', ()=>{
function destructivelyRemoveElementFromBeginningOfArray(array) {
      array.shift()
  }

//describe('removeElementFromBeginningOfArray(array)', () => {
function removeElementFromBeginningOfArray(array) {
  array.slice(1)
  return array
    }
    
//  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    function destructivelyRemoveElementFromEndOfArray(array) {
      array.pop()
      return array 
    }

//  describe('removeElementFromEndOfArray(array)', () => {
function removeElementFromEndOfArray(array) {
    var newarr = array.slice(0, array.length - 1)
     return newarr
}

