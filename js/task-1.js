const categoriesDOM = document.querySelector('#categories');
const childElements = categoriesDOM.querySelectorAll('li.item');

console.log('Number of Categories :  ',childElements.length);

childElements.forEach(childElement => {
    console.log('category : ',childElement.querySelector('h2').textContent);
    console.log("Elements : ",childElement.querySelectorAll('ul li').length);
    
});