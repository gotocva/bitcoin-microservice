import { router } from "../bootstrap/index";

import * as UserController from "../controller/UserController";
import * as BitcoinController from "../controller/BitcoinController";

import { auth } from "../middleware/api";
import { userValidator } from "../validator/user";

import { createAddress,getBalance } from "../validator/Bitcoin";

router.post('/user',[userValidator], UserController.store);
router.post('/user/verify-otp', [ auth ], UserController.verifyOtp);


/**
 * Bitcoin routes
 */
router.post('/address/new',[ createAddress ], BitcoinController.createAddress);
router.post('/address/balance',[ getBalance ], BitcoinController.getBalance);

module.exports = router;  