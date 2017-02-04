using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NBitcoin;

namespace BTCClassLibrary
{
    public class HashClass : IHash
    {
        public void setHashPublicKey(ref KeyId keyId, ref PubKey pubKey)
        {
            //hash the publick key
            Console.WriteLine(@"Starting generate Hash Publick Key");
            keyId = pubKey.Hash;
            Console.WriteLine(@"Hash Public Key {keyId}");
        }
    }
}
