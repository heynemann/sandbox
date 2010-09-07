#!/usr/bin/env python
# -*- coding: utf-8 -*-

from pyccuracy import ActionBase as Action

class PesquisarCoisasInteressantesAction(Action):
    regex = r'Eu pesquiso a "(?P<assunto>.+)"'

    def execute(self, context, assunto):
        self.execute_action(u'Eu preencho a caixa de texto "query" com "%s"' % assunto, context)
        self.execute_action(u'Eu clico no botão "pesquisar" e espero', context)
        
class FicarFelizAction(Action):
    regex = r'Eu fico feliz'

    def execute(self, context):
        self.execute_action(u'Eu vejo o título "Larissa Riquelme - Pesquisa Google"', context)