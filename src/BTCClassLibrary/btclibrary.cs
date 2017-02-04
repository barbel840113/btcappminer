using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NBitcoin.BitcoinCore;
using NBitcoin;
using QBitNinja.Client;
using QBitNinja.Client.Models;
using NBitcoin.DataEncoders;

namespace BTCClassLibrary
{
    public class BTCApp
    {
        #region Variable
        /// <summary>
        /// This is a Public Key
        /// </summary>
        private PubKey _pubKey;
        /// <summary>
        /// This is a Private Key
        /// </summary>
        private Key _privateKey;
        /// <summary>
        /// Hash Class
        /// </summary>
        private HashClass _hashClass;
        /// <summary>
        /// Create a client for transaction
        /// </summary>
        private QBitNinjaClient _client;

        private string _bitCoinAddress;
        

        #endregion
        public BTCApp()
        {
            this._privateKey = new Key();
            this._hashClass = new HashClass();
            this._client = new QBitNinjaClient(Network.TestNet);
            this._bitCoinAddress = "n31THGo4pauzLfGkVUzqYp54h67PNXCaPY";


        }

        public BTCApp(PubKey _pubKey, Key _privateKey)
        {
            this._pubKey = _pubKey;
            this._privateKey = _privateKey;
        }

        public PubKey getPublicKey()
        {
            Console.WriteLine(@"Starting to generate Public Key");
            this._pubKey = this._privateKey.PubKey;
            Console.WriteLine(@"Public Key is {_pubKey}");

            return this._pubKey;
        }

        public string getPublicKeyToString()
        {
            return _pubKey.ToString();
        }

        public string getTestNetwokToString()
        {
            return Network.TestNet.ToString();
        }

        public string getMainNetworkToString()
        {
            return Network.Main.ToString();
        }

        public string getPublicHashKeyToString()
        {
            var keyId = new KeyId();
            _hashClass.setHashPublicKey(ref keyId, ref _pubKey);
            return keyId.ToString();
        }

        public void QueryTransaction()
        {
            //parse transaction id to Nbitcoin.uint256 so the client can eat it
            var transactionId = uint256.Parse("0893a7f3cbb0cd1e202762bc6e16536e6a6cce6e88256c846f6aa4c20a4f3c8f");

            //query transaction
            //GetTransactionResponse transactionResponse = this._client.GetTransaction(transactionId).Result;

            //transaction type
            //NBitcoin.Transaction transaction = transactionResponse.Transaction;

            //write output into console
            //Console.WriteLine(transactionResponse.TransactionId);
            //Console.WriteLine(transaction.GetHash());

            //get address
            BitcoinPubKeyAddress bitcoinPubKey = new BitcoinPubKeyAddress("n31THGo4pauzLfGkVUzqYp54h67PNXCaPY", Network.TestNet);
            Script pubScripKey = bitcoinPubKey.ScriptPubKey;
            Console.WriteLine(bitcoinPubKey.GetHashCode());
            Console.WriteLine(pubScripKey);
            Console.WriteLine(pubScripKey.GetDestination());
            //pubScripKey.

            Transaction mike = new Transaction {
                Outputs = {
                    new TxOut("0.45", pubScripKey.GetDestination())                    
                }
            };

            Coin[] mikeCoin = mike.Outputs
                                  .Select((o, i) => new Coin(new OutPoint(mike.GetHash(), i), o))
                                  .ToArray();

            var txBuilder = new TransactionBuilder();

            var sameMainNetAddress = pubScripKey.GetDestinationAddress(Network.TestNet);
            Console.WriteLine(sameMainNetAddress);

            var samePublickKeyhash = (KeyId)pubScripKey.GetDestination();
            Console.WriteLine(samePublickKeyhash);
            var ameTestNetworkAddress = new BitcoinPubKeyAddress(samePublickKeyhash, Network.TestNet);
            Console.WriteLine(ameTestNetworkAddress);
            //var txt = txBuilder
             //              .AddCoins(mikeCoin)
             //              .

           
        }

        //show encrypt address
        public void showencryptAddress( )
        {
            byte[] byteArray = Encoders.Base58.DecodeData("n31THGo4pauzLfGkVUzqYp54h67PNXCaPY");
            string hex = Encoders.Hex.EncodeData(byteArray);
            Console.WriteLine("Show encrypted bitcoin addrss");
            Console.Write(hex);

            BitcoinAddress addrss = (BitcoinAddress)Network.CreateFromBase58Data("n31THGo4pauzLfGkVUzqYp54h67PNXCaPY");
            BitcoinAddress address = Network.TestNet.CreateBitcoinAddress("n31THGo4pauzLfGkVUzqYp54h67PNXCaPY");
            Console.WriteLine("Show first option of creating Address");
            //BitcoinAddress address2 = new BitcoinAddress("n31THGo4pauzLfGkVUzqYp54h67PNXCaPY", Network.TestNet);

            Console.WriteLine(address);
            Console.WriteLine("Show ID of address");
            //Console.Write()
           
        }

        public void showSignature()
        {
            BitcoinSecret secret = new BitcoinSecret("base58 private key", Network.TestNet);
            uint256 hash;
            uint256.TryParse("This is hash", out hash);
            var signature = secret.PrivateKey.Sign(hash,SigHash.All);
            Console.WriteLine(signature);
            Console.WriteLine(signature.Signature.ToString());
            Console.WriteLine(signature.SigHash.ToString());

        }
    }

    
    
}

























































