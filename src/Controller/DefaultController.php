<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class DefaultController extends Controller
{
    /**
     * @Route("/data", name="data")
     */
    public function data()
    {
       return new JsonResponse([
           "data1" => "lapin",
           "data2" => "poulet"
       ]);
    }

    /**
     * @Route("/{slug}", name="home", requirements={"slug"="(.+)?"})
     */
    public function index()
    {
        require('build/index.html');
        exit;
    }
}
