package org.openlmis.web.controller;

import io.swagger.annotations.Api;
import lombok.NoArgsConstructor;
import org.openlmis.core.domain.Partner;
import org.openlmis.core.exception.DataException;
import org.openlmis.core.web.controller.BaseController;
import org.openlmis.restapi.response.RestResponse;
import org.openlmis.core.service.PartnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.Principal;
import java.util.List;

import static org.openlmis.restapi.response.RestResponse.*;
import static org.springframework.http.HttpStatus.*;
import static org.springframework.web.bind.annotation.RequestMethod.*;

@Controller
@NoArgsConstructor
@Api(value = "Partners", description = "Manage Partners", position = 5)
public class PartnersController extends BaseController {

    @Autowired
    private PartnerService partnerService;

    @RequestMapping(value = "/rest-api/partners/save", method = POST, headers = ACCEPT_JSON)
    public ResponseEntity<RestResponse> savePartner(@RequestBody Partner partner, Principal principal) {
        Long id;

        try {
            id = partnerService.addPartner(partner);
        } catch (DataException e) {
            return error(e.getOpenLmisMessage(), BAD_REQUEST);
        }

        RestResponse response = new RestResponse("partnerId", id);
        return new ResponseEntity<>(response, CREATED);
    }

    @RequestMapping(value = "/rest-api/partners/get/{code}", method = GET, headers = ACCEPT_JSON)
    public ResponseEntity<RestResponse> getPartnerByCode(@PathVariable("code") String code) {
        Partner partner = partnerService.getPartnerByCode(code);

        try {
            partner = partnerService.getPartnerByCode(code);
            if (partner == null) {
                return error("Partner not found", NOT_FOUND);
            }
        } catch (DataException e) {
            return error(e.getOpenLmisMessage(), BAD_REQUEST);
        }

        return response("partner", partner);
    }

    @RequestMapping(value = "/rest-api/partners", method = GET)
    public ResponseEntity<RestResponse> getAllPartners(@RequestParam(value = "search", required = false) String search) {
        List<Partner> partners = (search != null && !search.isEmpty()) ? partnerService.searchPartners(search) : partnerService.getAllPartners();
        return response("partners", partners);
    }


    @RequestMapping(value = "/rest-api/partners/update", method = PUT, headers = ACCEPT_JSON)
    public ResponseEntity<RestResponse> updatePartner(@RequestBody Partner partner) {
        try {
            partnerService.updatePartner(partner);
        } catch (DataException e) {
            return error(e.getOpenLmisMessage(), BAD_REQUEST);
        }
        return response("message", "Partner updated successfully");
    }

//    @RequestMapping(value = "/rest-api/partners/delete/{code}", method = DELETE, headers = ACCEPT_JSON)
//    public ResponseEntity<RestResponse> deletePartner(@PathVariable("code") String code) {
//        try {
//            partnerService.deletePartner(code);
//        } catch (DataException e) {
//            return error(e.getOpenLmisMessage(), BAD_REQUEST);
//        }
//        return response("message", "Partner deleted successfully");
//    }
}
