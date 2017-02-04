using NBitcoin;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BTCClassLibrary
{
    interface IHash
    {
        /// <summary>
        /// method which will generate hash
        /// from the Public Key
        /// </summary>
        /// <param name="keyId">Hash Public Key</param>
        /// <param name="pubKey">Publick Key</param>
        void setHashPublicKey(ref KeyId keyId, ref PubKey pubKey);
    }
}
