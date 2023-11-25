#!/bin/bash

arquivoReact () {

mkdir ${1}/css
touch ${1}/${1}.js ${1}/css/${1}.css

}

laçoArq () {
    arqs=${1}
    for e in ${arqs[@]}
      do
         arquivoReact $e
      done
}
