/*
  Coded by Johnny jr Alimoot C. - JAC
*/

function classCheck(classArray) {
  if (classArray.length > 0) {
    return true;
  }
  return false;
}
function initHtmlCodes() {
  var codes = document.getElementsByClassName('johnny-html');
  if (classCheck(codes)) {
    for (var i = 0; i < codes.length; i++) {
      var currentCode = codes[i].value;
      currentCode = currentCode.toString();
      var attrReg = /([a-zA-Z-]+)\s*=\s*["'](.*?)["']/g;
      var openTagReg = /<([a-zA-Z0-9-]+)(\s*[^>]*?)?>/g;
      var closTagReg = /<\/+([a-zA-Z0-9-]+)(\s*[^>]*?)?>/g;

      // For newlines
      currentCode = currentCode.replace(/\n/g, '{{br}}');

      // For spaces
      currentCode = currentCode.replace(/\s/g, '&nbsp;');

      // For Html attributes
      currentCode = currentCode.replace(attrReg, function (match, attributeName, attributeValue) {
        return '{{span class="atr"}}' + attributeName + '{{/span}}={{span class="class"}}"' + attributeValue + '"{{/span}}';
      });

      // Comments
      currentCode = currentCode.replace(/<!--/g, '{{span class="comments"}}<!--').replace(/-->/g, '-->{{/span}}');

      // For open html tag
      currentCode = currentCode.replace(openTagReg, function (match, tagName, attributes) {
        if (attributes) {
          return '<{{span class="tag"}}' + tagName + '{{/span}}' + attributes + '>';
        }
        return '<{{span class="tag"}}' + tagName + '{{/span}}>';
      });

      // For closing html tag
      currentCode = currentCode.replace(closTagReg, function (match, tagName, attributes) {
        return '<\/{{span class="tag"}}' + tagName + '{{/span}}>';
      });

      // For <> convertion to readable
      currentCode = currentCode.replace(/</g, '&lt;').replace(/>/g, '&gt;');

      // For <> coloring
      currentCode = currentCode.replace(/&lt;\/+/g, '<span class="char">&lt;/</span>').replace(/&lt;/g, '<span class="char">&lt;</span>').replace(/&gt;/g, '<span class="char">&gt;</span>');

      // For {{ = < convertion to be read by html
      currentCode = currentCode.replace(/{{/g, '<').replace(/}}/g, '>');

      // My highlighter
      // [@j-highlight|+|test1-@j]code[@j] = <span class="highlight test1">code</span>
      currentCode = currentCode.replace(/\[@j-/g, '<span class="').replace(/\[@j]/g, '</span>').replace(/-@j]/g, '">').replace(/\|\+\|/g, ' '); //class space

      var divElem = document.createElement('div');
      divElem.innerHTML = currentCode;
      divElem.classList.add('johnny-html');
      divElem.id = codes[i].id;
      codes[i].parentNode.replaceChild(divElem, codes[i]);
    }
  }
}
function initJsCodes() {
  var codesJs = document.getElementsByClassName('johnny-js');
  if (classCheck(codesJs)) {
    for (var i = 0; i < codesJs.length; i++) {
      var currentCode = codesJs[i].value;
      currentCode = currentCode.toString();

      // My highlighter
      // [@j-highlight|+|test1-@j]code[@j] = <span class="highlight test1">code</span>
      currentCode = currentCode.replace(/\[@j-/g, '<span|+|class="').replace(/\[@j]/g, '</span>').replace(/-@j]/g, '">');

      // Strings
      currentCode = currentCode.replace(/('[\w#-]+')/g, '<span|+|class="str">$1</span>');

      // Vars
      currentCode = currentCode.replace(/(\w+)\s=/g, '<span|+|class="vars">$1</span> =').replace(/\[([^[\]]*)\]/g, '[<span|+|class="vars">$1</span>]').replace(/(\w+)\./g, '<span|+|class="vars">$1</span>.');

      // Funcion name
      currentCode = currentCode.replace(/(\bfunction\s+\w+)\(/g, '<span|+|class="funcname">$1</span>(');

      // Oop Func
      currentCode = currentCode.replace(/\.(\w+)\(/g, '.<span|+|class="funcname">$1</span>(');

      // Declaration
      currentCode = currentCode.replace(/function/g, '<span|+|class="declaration">function</span>');

      // Characters
      currentCode = currentCode.replace(/(\(|\)|\{|}|\[|\])/g, '<span|+|class="char">$1</span>');

      // Condition if for
      var patternForif = /(for|if|else|while|do|switch|break|continue|return|try|catch|finally|import|export|await|async)\b/g;
      var patternDeclaration = /(var|let|const)\b/g;
      currentCode = currentCode.replace(patternForif, '<span|+|class="forif">$1</span>').replace(patternDeclaration, '<span|+|class="declaration">$1</span>');

      // Pattern

      // For newlines
      currentCode = currentCode.replace(/\n/g, '<br>');

      // For spaces
      currentCode = currentCode.replace(/\s/g, '&nbsp;').replace(/\~dot\~/g, '.');
      currentCode = currentCode.replace(/\|\+\|/g, ' ');
      var divElem = document.createElement('div');
      divElem.innerHTML = currentCode;
      divElem.classList.add('johnny-js');
      divElem.id = codesJs[i].id;
      codesJs[i].parentNode.replaceChild(divElem, codesJs[i]);
    }
  }
}
function initHighLightLink() {
  var highlighter = document.getElementsByClassName('highlighter');
  function highLight(elem) {
    var dataHref = elem.getAttribute('data-href');
    var dataClass = '.' + elem.getAttribute('data-class');
    var highlighting = document.getElementById(dataHref).querySelectorAll(dataClass);
    for (var i = 0; i < highlighting.length; i++) {
      highlighting[i].classList.add('active');
    }
    elem.classList.add('disabled');
    setTimeout(function () {
      for (var _i = 0; _i < highlighting.length; _i++) {
        highlighting[_i].classList.remove('active');
        elem.classList.remove('disabled');
      }
    }, 3500);
  }
  if (classCheck(highlighter)) {
    for (var i = 0; i < highlighter.length; i++) {
      highlighter[i].href = '#' + highlighter[i].getAttribute('data-href');
      highlighter[i].addEventListener('click', function () {
        highLight(this);
      });
    }
  }
}
function initSeeImg() {
  var seeImgBtn = document.getElementsByClassName('see-img');
  var imgToSee = document.getElementsByClassName('img-to-see');
  var imgContainer = document.getElementsByClassName('img-container')[0];
  if (classCheck(seeImgBtn)) {
    for (var i = 0; i < seeImgBtn.length; i++) {
      seeImgBtn[i].addEventListener('click', function () {
        var imgToSeeId = this.getAttribute('data-imgToSee');
        for (var j = 0; j < imgToSee.length; j++) {
          imgToSee[j].style.display = 'none';
          if (imgToSee[j].classList.contains(imgToSeeId)) {
            imgToSee[j].style.display = '';
            imgContainer.style.display = 'block';
            imgContainer.scrollTop = 0;
          }
        }
      });
    }
  }
  document.getElementsByClassName('img-container-close')[0].addEventListener('click', function () {
    imgContainer.style.display = '';
  });
}

/**
 * Set Document Root
 * @param {String} a 
 * @param {String} b 
 */
function setroot(a, b) {
  document.documentElement.style.setProperty(a, b);
}
function initListener() {
  var menuToggler = document.getElementsByClassName('menutoggler');
  if (classCheck(menuToggler)) {
    for (var i = 0; i < menuToggler.length; i++) {
      menuToggler[i].addEventListener('click', function () {
        document.getElementsByTagName('nav')[0].classList.toggle('active');
      });
    }
  }
  document.getElementById('settingFont').addEventListener('input', function () {
    setroot('--JAC_TextScale', this.value.toString());
  });
}
initHtmlCodes();
initJsCodes();
initHighLightLink();
initListener();
initSeeImg();