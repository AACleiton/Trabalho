package br.unicesumar.restserver.ManterDisciplina;

import java.util.List;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Transactional
@RequestMapping(value="/disciplinas")
@RestController
public class DisciplinaController {
    
    @Autowired
    private EntityManager persistence;
    
    @RequestMapping(method = RequestMethod.POST)
    public void setDisciplina(@RequestBody Disciplina d){
        persistence.persist(d);
    }
    
    //Eu criei 
    @RequestMapping(value = "/salvar", method = RequestMethod.POST)
    public void setDisciplina(@RequestParam Long id, @RequestParam String nome, @RequestParam Integer cargaHoraria, @RequestParam Double peso){
        Disciplina d = new Disciplina(id, nome, cargaHoraria, peso);
        persistence.persist(d);
    }
    
    @RequestMapping(method = RequestMethod.GET)
    public List<Disciplina> getDisciplinas(){
        return persistence.createQuery("from Disciplina").getResultList();
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public void alterarDisciplina(@PathVariable Long id, @RequestBody Disciplina d){
        this.excluirDisciplina(id);
        persistence.persist(d);
    }
    
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void excluirDisciplina(@PathVariable Long id){
        persistence.createQuery("delete from Disciplina d where d.id = :id").setParameter("id", id).executeUpdate();
    }
}
