package pr2.tp.backen.Services;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.HashMap;
import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.util.JRLoader;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.ResourceUtils;

public class Ireport {
 
    public ResponseEntity<Resource> Contrato(HashMap<String, Object> parametros) throws JRException, FileNotFoundException {

        final File file = ResourceUtils.getFile("classpath:ContratoTP.jasper");
        final JasperReport report = (JasperReport) JRLoader.loadObject(file);

        JasperPrint jasperPrint = JasperFillManager.fillReport(report, parametros, new JREmptyDataSource());
        byte[] reporte = JasperExportManager.exportReportToPdf(jasperPrint);

        StringBuilder stringBuilder = new StringBuilder().append("InvoicePDF:");
        ContentDisposition contentDisposition = ContentDisposition.builder("attachment")
                .filename(stringBuilder.append(".pdf").toString())
                .build();
        HttpHeaders headers = new HttpHeaders();
        headers.setContentDisposition(contentDisposition);
        return ResponseEntity.ok().contentLength((long) reporte.length)
                .contentType(MediaType.APPLICATION_PDF)
                .headers(headers).body(new ByteArrayResource(reporte));

    }
}
