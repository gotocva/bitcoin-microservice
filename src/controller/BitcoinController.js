
import BlockCyper from "../utils/blockcyper/BlockCyper";

/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
export const createAddress = async (req,res) => {
    let env = (req.body.environment === "TEST_NET") ? "test3" : "main";
    const bcyper = new BlockCyper(req.body.coin,env);
    await bcyper.createAddress()
    .then((address) => {
        res.success(address,"success");
    })
    .catch((error) => {
        res.error(error,"error");
    });
};




/**
 * 
 * @param {Object} req 
 * @param {Object} res 
 */
export const getBalance = async (req,res) => {
    let env = (req.body.environment === "TEST_NET") ? "test3" : "main";
    const bcyper = new BlockCyper(req.body.coin,env);

    bcyper.getBalance(req.body.from_address)
    .then((balance) => {
        res.success(balance,"success");
    })
    .catch((error) => {
        res.error(error,"error");
    });
};


