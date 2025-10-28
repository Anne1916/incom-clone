import React from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-custom">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h5 className="footer-title">INCOM MX</h5>
                        <p className="footer-text">
                            Líder en distribución de equipamiento industrial especializado 
                            para construcción, telecomunicaciones y seguridad.
                        </p>
                        <div className="social-links mt-3">
                            <a href="#" className="social-icon me-3">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon me-3">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="social-icon me-3">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="social-icon">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="footer-title">Enlaces Rápidos</h5>
                        <ul className="footer-links">
                            <li><a href="#productos">Escaleras</a></li>
                            <li><a href="#productos">Guías de Jalado</a></li>
                            <li><a href="#productos">Cables</a></li>
                            <li><a href="#productos">Etiquetadoras</a></li>
                            <li><a href="#productos">Seguridad Industrial</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="footer-title">Contacto</h5>
                        <ul className="footer-links">
                            <li>
                                <i className="fas fa-phone me-2"></i>
                                +52 55 1234 5678
                            </li>
                            <li>
                                <i className="fas fa-envelope me-2"></i>
                                info@incom.mx
                            </li>
                            <li>
                                <i className="fas fa-map-marker-alt me-2"></i>
                                Ciudad de México, México
                            </li>
                            <li>
                                <i className="fas fa-clock me-2"></i>
                                Lun - Vie: 9:00 AM - 6:00 PM
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <p className="footer-copyright">
                            &copy; {currentYear} INCOM MX. Todos los derechos reservados.
                        </p>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <a href="#" className="footer-link-bottom me-3">Política de Privacidad</a>
                        <a href="#" className="footer-link-bottom">Términos y Condiciones</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};