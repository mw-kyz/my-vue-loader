const { existsSync, mkdirSync, readdirSync, unlinkSync, writeFileSync } = require('fs')
const { resolve } = require('path')

// 匹配 template 标签内所有内容
const templateReg = /\<template\>(.*?)\<\/template\>/
// 匹配 script 标签内所有内容
const scriptReg = /\<script\>(.*?)\<\/script\>/
// 匹配 style 标签内所有内容
const styleReg = /\<style\>(.*?)\<\/style\>/

function vueLoader (source) {
  // 去除换行
  const _str = source.replace(/[\r\n]/g, '')

  const template = _str.match(templateReg)[1]
  const script = _str.match(scriptReg)[1]
  const style = _str.match(styleReg)[1]

  const cssFileName = `__temp/css/__${ Date.now() }.css`

  // 正则为匹配第一个大括号后面的任意一个字符，然后将其替换为template
  // 此处就是为了给vue对象插入一个 template 属性，属性值就是vue文件template标签里面的html
  const vueScript = script.replace(/\{(.*?)/, (node, key) => {
    return `
      { template: '${ template }',
    `
  })

  writeFile(cssFileName, style)
  return `
    import '../${ cssFileName }'
    ${ vueScript }
  `
}

function writeFile (cssFileName, str) {
  if (!existsSync(formatPath('__temp'))) {
    mkdirSync(formatPath('__temp'))
    mkdirSync(formatPath('__temp/css'))
  }

  const files = readdirSync(formatPath('__temp/css/'))

  files && files.forEach(file => {
    console.log(111)
    unlinkSync(formatPath('__temp/css/' + file))
  })

  writeFileSync(formatPath(`${ cssFileName }`), str)
}

function formatPath (path) {
  return resolve(__dirname, '../../' + path)
}

module.exports = vueLoader