using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BTCClassLibrary;

namespace ConsoleApp1
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BTCApp app = new BTCApp();
            app.showSignature();
            while(Console.ReadLine().Length != 0 )
            {

            }
        }
    }
}
