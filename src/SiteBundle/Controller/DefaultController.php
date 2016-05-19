<?php

namespace SiteBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('SiteBundle:Default:index.html.twig');
    }

    public function kanzleiAction() {
        return $this->render('SiteBundle:Default/Kanzlei:kanzlei.html.twig');
    }

    public function sekretariatAction() {
        return $this->render('SiteBundle:Default/Kanzlei:sekretariat.html.twig');
    }

    public function sprechzeitenAction() {
        return $this->render('SiteBundle:Default/Kanzlei:sprechzeiten.html.twig');
    }

    public function anfahrtAction() {
        return $this->render('SiteBundle:Default/Kanzlei:anfahrt.html.twig');
    }

    public function anwaltAction() {
        return $this->render('SiteBundle:Default/Anwälte:anwaelte.html.twig');
    }

    public function lutzEiselAction() {
        return $this->render('@Site/Default/Anwälte/lutz-eisel.html.twig');
    }
}
