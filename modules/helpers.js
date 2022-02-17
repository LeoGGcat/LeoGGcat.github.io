function $g(selector) {
  //判斷是否為id selector
  if (selector.includes("#") && !selector.includes(" ")) {
      //回傳Element
      return document.querySelector(selector);
  }

  //回傳NodeList集合
  let nodelist = document.querySelectorAll(selector);

  return nodelist.length == 1 ? nodelist[0] : nodelist;
}


function $gg(selector){
  //nodeList至少包含一個node-element object
  //如果沒有符合符合的，將會是 - empty NodeList

  let nodelist = document.querySelectorAll(selector);

  if(nodelist.length==0){
    return null
  }

  return nodelist.length == 1 ? nodelist[0] : nodelist
}

function $ce(element, text) {
  let el = document.createElement(element)

  if(typeof(text)!=="undefined" && typeof(text)!==null && typeof(text)!==""){
    el.innerText = text 						
  }
  return el
}

export {$g, $gg, $ce}
