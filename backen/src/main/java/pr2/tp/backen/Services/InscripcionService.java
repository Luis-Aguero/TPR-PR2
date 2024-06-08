package pr2.tp.backen.Services;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.text.SimpleDateFormat;
import java.util.Collection;
import java.util.HashMap;
import java.util.Optional;
import java.util.Date;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import pr2.tp.backen.Repository.InscripcionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;
import net.sf.jasperreports.engine.JRException;
import pr2.tp.backen.Modelo.Inscripcion;

@Service
public class InscripcionService {

    @Autowired
    private InscripcionRepository inscripRepository;

    public List<Inscripcion> findAll() {
        return inscripRepository.findAll();
    }

    public Optional<Inscripcion> findById(Long id) {
        return inscripRepository.findById(id);
    }

    public Inscripcion save(Inscripcion Inscrip) {
        return inscripRepository.save(Inscrip);
    }

    public void deleteById(Long id) {
        inscripRepository.deleteById(id);
    }

    public ResponseEntity<Resource> contratoInscripcion(Long idInscripcion) {
        Optional<Inscripcion> optInscripcion = this.inscripRepository.findById(idInscripcion);
        if (optInscripcion.isPresent()) {
            final Inscripcion inscripcion = optInscripcion.get();
            System.err.println(inscripcion.getEstado_Inscripcion());
            try {
                HashMap<String, Object> parametros = new HashMap();
                parametros.put("Institucion", "Escueltia");
                parametros.put("Alumno", inscripcion.getEstado_Inscripcion());
                parametros.put("Fecha", inscripcion.getEstado_Inscripcion());
                parametros.put("FechaFin", inscripcion.getEstado_Inscripcion());
                parametros.put("Doc_alumno", inscripcion.getEstado_Inscripcion());
                parametros.put("Nivel", inscripcion.getEstado_Inscripcion());
                parametros.put("FechaIni", inscripcion.getEstado_Inscripcion());
                parametros.put("NroInscripcion", inscripcion.getEstado_Inscripcion());
                return new Ireport().Contrato(parametros);
            } catch (FileNotFoundException | JRException e) {
              //  e.printStackTrace();
                System.err.println(e.getMessage());
            }
        } else {
            return ResponseEntity.noContent().build(); //No se encontro el reporte
        }
        return null;
    }
}
