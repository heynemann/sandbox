#!/usr/bin/env python
#-*- coding:utf-8 -*-

import sys
from PyV8 import JSContext, JSExtension

def main():
    qunit_code = open('tests.js', 'r').read()
    qunit = JSExtension('tests/javascript', qunit_code)
    with JSContext(extensions=['tests/javascript']) as ctxt:
        assert ctxt.eval("bla('coisa');") == "bla - coisa"

    return 0

if __name__ == '__main__':
    sys.exit(main())


