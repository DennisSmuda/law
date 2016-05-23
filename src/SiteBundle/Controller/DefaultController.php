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
    public function evaKarrmannAction() {
        return $this->render('@Site/Default/Anwälte/eva-karrmann.html.twig');
    }
    public function tobiasReimannAction() {
        return $this->render('@Site/Default/Anwälte/tobias-reimann.html.twig');
    }
    public function manifestAction() {
        return $this->render('@Site/Default/manifest.html.twig');
    }

    public function rechtsgebieteAction() {
        return $this->render('@Site/Default/Rechtsgebiete/rechtsgebiete.html.twig');
    }
    public function strafrechtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/strafrecht.html.twig');
    }
    public function strafrechtUebersichtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/uebersicht-strafgesetze.html.twig');
    }
    public function strafverfahrenAction() {
        return $this->render('@Site/Default/Rechtsgebiete/strafverfahren.html.twig');
    }
    public function pflichtverteidigungAction() {
        return $this->render('@Site/Default/Rechtsgebiete/pflichtverteidigung.html.twig');
    }
    public function bussgeldAction() {
        return $this->render('@Site/Default/Rechtsgebiete/bussgeldsachen.html.twig');
    }
    public function polizeiAction() {
        return $this->render('@Site/Default/Rechtsgebiete/polizei-ordnungsrecht.html.twig');
    }
    public function psychiatrieAction() {
        return $this->render('@Site/Default/Rechtsgebiete/psychiatrie.html.twig');
    }
    public function familienrechtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/familienrecht.html.twig');
    }
    public function verkehrsrechtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/verkehrsrecht.html.twig');
    }
    public function zivilrechtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/zivilrecht.html.twig');
    }
    public function vertragsrechtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/vertragsrecht.html.twig');
    }
    public function arbeitsrechtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/arbeitsrecht.html.twig');
    }
    public function erbrechtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/erbrecht.html.twig');
    }
    public function mietrechtAction() {
        return $this->render('@Site/Default/Rechtsgebiete/mietrecht.html.twig');
    }

}
