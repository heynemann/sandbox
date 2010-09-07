class Turma
  def initialize(*alunos)
    @alunos = alunos
  end

  def each
    @alunos.each do |aluno|
      yield(aluno)
    end
  end
  
  def sorted
    @alunos.sort_by { |aluno| aluno }.each do |aluno|
      yield(aluno)
    end
  end
end

fj91 = Turma.new("Guilherme", "Paulo", "Paniz")
fj91.each do |nome|
  puts nome
end

fj91.sorted do |nome|
  puts nome
end