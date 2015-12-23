
# Atom package Clipboard Helper

This is a package which adds 'Copy Selection' feature to any target marks `.enable-cliboard-helper .text-copiable:not(.disable-cliboard-helper)`

## Some packages which supports this package
 - command-executor: ([package](https://atom.io/packages/command-executor) | [repo](https://github.com/ksxatompackages/cmd-exec.git))

*Honestly, there's only one, not 'some' (Forever alone :cry:)*

*So, if you want to list your package here, please request*

## How to supports this package in my package?

To make an element of your package view (pane item or panel) has feature copy:
 - Be sure that the element is selectable
 - Container (parent element) of that element has class `enable-cliboard-helper`
 - The element itself has class `text-copiable`
