package br.unicesumar.restserver.veiculo;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/veiculos")
@Transactional
public class VeiculoController {

    @Autowired
    private EntityManager em;


    public List<Veiculo> getVeiculos() {
        return null;
    }
    
    public void criarVeiculo(@RequestBody Veiculo veiculo) {
    }        
    
    public void alterarVeiculo(@RequestBody Veiculo veiculo) {
    }        
    
    public void excluirVeiculo(@PathVariable Long id) {
    }        
    
}
