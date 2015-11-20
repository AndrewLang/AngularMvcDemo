using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularMvcDemo.Controllers
{
    public class ViewController : Controller
    {
        /// <summary>
        /// Indexes the specified view name.
        /// </summary>
        /// <param name="viewName">Name of the view.</param>
        /// <returns></returns>
        public IActionResult GetView(string viewName)
        {
            return PartialView(string.Format("_{0}View", viewName));
        }
    }
}
