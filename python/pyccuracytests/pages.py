from pyccuracy import Page

class PaginadeBuscadoGoogle(Page):
    url = 'http://www.google.com'

    def register(self):
        self.quick_register('query', 'input.lst')
        self.quick_register('pesquisar', 'input[name=btnG]')