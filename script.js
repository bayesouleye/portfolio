/* ===================== DONNEES (FR / EN regroupées par item) ===================== */
const contentData = {

  /* ---- Profil : domaines d'expertise ---- */
  profile: [
    {
      fr: { title: "Appels d'offres & Avant-vente", details: "Analyse des cahiers des charges et des besoins clients, étude et sélection des solutions adaptées, comparaison des solutions techniques, élaboration des réponses techniques et financières avec l'équipe commerciale, conseil et accompagnement des clients dans leurs choix technologiques." },
      en: { title: "Tenders & Pre-Sales", details: "Analysis of specifications and client needs, review and selection of suitable solutions, comparison of technical options, drafting of technical and financial proposals with the sales team, advising and supporting clients in their technology choices." }
    },
    {
      fr: { title: "Gestion de Projets IT & ITIL", details: "Gestion des projets de bout en bout selon les bonnes pratiques de la méthodologie ITIL, de la réunion de démarrage au déploiement, en passant par la planification, la coordination des intervenants, le suivi des actions, la mise en service, la recette et le suivi post-déploiement." },
      en: { title: "IT Project Management & ITIL", details: "End-to-end project management following ITIL best practices, from the kickoff meeting to deployment, including planning, stakeholder coordination, action tracking, go-live, acceptance testing and post-deployment follow-up." }
    },
    {
      fr: { title: "Administration Serveurs & Postes de Travail", details: "Installation, administration, configuration et maintenance des environnements Windows Server et Linux, ainsi que des postes de travail Windows ; gestion des services systèmes, diagnostic et résolution des incidents et assistance technique." },
      en: { title: "Server & Workstation Administration", details: "Installation, administration, configuration and maintenance of Windows Server and Linux environments, as well as Windows workstations; management of system services, incident diagnosis and resolution, and technical support." }
    },
    {
      fr: { title: "Virtualisation & Datacenter", details: "Conception, déploiement et administration d'environnements virtualisés et d'infrastructures datacenter, notamment VMware, Hyper-V, Nutanix AHV et Proxmox." },
      en: { title: "Virtualization & Data Center", details: "Design, deployment and administration of virtualized environments and data center infrastructures, including VMware, Hyper-V, Nutanix AHV and Proxmox." }
    },
    {
      fr: { title: "Infrastructures SAN & Hyperconvergées", details: "Déploiement, configuration et administration de solutions de stockage SAN et d'infrastructures hyperconvergées (HCI)." },
      en: { title: "SAN & Hyperconverged Infrastructures", details: "Deployment, configuration and administration of SAN storage solutions and hyperconverged infrastructures (HCI)." }
    },
    {
      fr: { title: "Cloud & Infrastructures IT", details: "Participation à la conception, au déploiement et à l'administration de solutions Cloud et d'infrastructures IT modernes." },
      en: { title: "Cloud & IT Infrastructure", details: "Involved in the design, deployment and administration of Cloud solutions and modern IT infrastructures." }
    },
    {
      fr: { title: "PRA & PCA", details: "Conception et mise en œuvre de solutions de Plan de Reprise d'Activité (PRA) et de Plan de Continuité d'Activité (PCA), avec prise en compte des enjeux de disponibilité, sauvegarde et reprise des services." },
      en: { title: "DRP & BCP", details: "Design and implementation of Disaster Recovery Plan (DRP) and Business Continuity Plan (BCP) solutions, addressing availability, backup and service-restoration requirements." }
    },
    {
      fr: { title: "Maintenance & Support", details: "Maintenance préventive et corrective, diagnostic et résolution des incidents, support technique et accompagnement des clients." },
      en: { title: "Maintenance & Support", details: "Preventive and corrective maintenance, incident diagnosis and resolution, technical support and client assistance." }
    },
    {
      fr: { title: "Documentation & Livrables Projets", details: "Élaboration des BOM (Bill of Materials) et des LLD (Low-Level Design) en phase de conception, préparation des documents techniques et des offres financières avec l'équipe commerciale lors des appels d'offres, rédaction des procédures et documents d'exploitation en fin de projet, ainsi que préparation et formalisation des procès-verbaux de recette (PV)." },
      en: { title: "Documentation & Project Deliverables", details: "Preparation of BOMs (Bill of Materials) and LLDs (Low-Level Design) during the design phase, preparation of technical documents and financial proposals with the sales team during tenders, drafting of operating procedures and documentation at project close, and preparation of acceptance sign-off reports." }
    },
    {
      fr: { title: "Relation Client & Coordination", details: "Participation et animation de réunions techniques avec les clients, présentation des solutions et des architectures, suivi des besoins et coordination des différents intervenants tout au long des projets." },
      en: { title: "Client Relations & Coordination", details: "Participation in and facilitation of technical meetings with clients, presentation of solutions and architectures, tracking of requirements and coordination of stakeholders throughout projects." }
    },
    {
      fr: { title: "Formation & Veille Technologique", details: "Participation à des webinaires, formations techniques et ateliers chez les partenaires technologiques, développement continu des compétences et préparation de certifications professionnelles sur les technologies et solutions d'infrastructure." },
      en: { title: "Training & Technology Watch", details: "Participation in webinars, technical training and workshops with technology partners, continuous skills development and preparation for professional certifications on infrastructure technologies and solutions." }
    },
    {
      fr: { title: "Formation & Accompagnement", details: "Formation et accompagnement des stagiaires et nouveaux collaborateurs, transmission des bonnes pratiques et suivi de leur montée en compétences sur les systèmes, la virtualisation et les infrastructures IT." },
      en: { title: "Mentoring & Team Support", details: "Training and mentoring of interns and new team members, sharing best practices and supporting their skill development in systems, virtualization and IT infrastructure." }
    }
  ],

  /* ---- Compétences techniques ---- */
  skills: [
    {
      fr: { title: "Virtualisation & Hyperconvergence", subtitle: "VMware · Nutanix · Hyper-V · Proxmox", details: "Conception, déploiement et administration de clusters virtualisés et hyperconvergés sur les environnements VMware vSphere, Nutanix AHV, Microsoft Hyper-V et Proxmox VE." },
      en: { title: "Virtualization & Hyperconvergence", subtitle: "VMware · Nutanix · Hyper-V · Proxmox", details: "Design, deployment and administration of virtualized and hyperconverged clusters across VMware vSphere, Nutanix AHV, Microsoft Hyper-V and Proxmox VE environments." }
    },
    {
      fr: { title: "Administration Systèmes", subtitle: "Windows Server · Linux", details: "Installation, configuration, durcissement et maintenance des environnements Windows Server et Linux, gestion des services systèmes et résolution d'incidents." },
      en: { title: "Systems Administration", subtitle: "Windows Server · Linux", details: "Installation, configuration, hardening and maintenance of Windows Server and Linux environments, management of system services and incident resolution." }
    },
    {
      fr: { title: "Identité & Annuaire", subtitle: "Active Directory · GPO · DNS · Microsoft 365 · Entra Connect", details: "Administration d'annuaires Active Directory, stratégies de groupe (GPO) et DNS, ainsi que synchronisation d'identité hybride avec Microsoft Entra Connect et gestion Microsoft 365." },
      en: { title: "Identity & Directory Services", subtitle: "Active Directory · GPO · DNS · Microsoft 365 · Entra Connect", details: "Administration of Active Directory, Group Policy (GPO) and DNS, along with hybrid identity synchronization via Microsoft Entra Connect and Microsoft 365 management." }
    },
    {
      fr: { title: "Sécurité & Contrôle d'Accès", subtitle: "Wallix Bastion · Kaspersky", details: "Mise en place et administration de solutions de sécurisation des accès à privilèges (Wallix Bastion) et de protection des postes et serveurs (Kaspersky Next EDR)." },
      en: { title: "Security & Access Control", subtitle: "Wallix Bastion · Kaspersky", details: "Deployment and administration of privileged access security solutions (Wallix Bastion) and endpoint/server protection (Kaspersky Next EDR)." }
    },
    {
      fr: { title: "Sauvegarde & Réplication", subtitle: "Veeam Backup & Replication · Veeam ONE", details: "Conception et administration de plateformes de sauvegarde et de réplication avec Veeam Backup & Replication, supervisées avec Veeam ONE." },
      en: { title: "Backup & Replication", subtitle: "Veeam Backup & Replication · Veeam ONE", details: "Design and administration of backup and replication platforms with Veeam Backup & Replication, monitored via Veeam ONE." }
    },
    {
      fr: { title: "Scripting & Automatisation", subtitle: "Python · PowerShell", details: "Développement de scripts d'automatisation et d'administration système avec Python et PowerShell." },
      en: { title: "Scripting & Automation", subtitle: "Python · PowerShell", details: "Development of automation and system administration scripts using Python and PowerShell." }
    },
    {
      fr: { title: "Normes & Conformité", subtitle: "ISO 27001/27005 · ANSSI · DISA STIG · NIS2", details: "Bonnes connaissances des référentiels de sécurité ISO 27001/27005, des recommandations ANSSI, des guides de durcissement DISA STIG et de la directive européenne NIS2." },
      en: { title: "Standards & Compliance", subtitle: "ISO 27001/27005 · ANSSI · DISA STIG · NIS2", details: "Solid knowledge of the ISO 27001/27005 security frameworks, ANSSI recommendations, DISA STIG hardening guides and the EU NIS2 directive." }
    },
    {
      fr: { title: "Gestion de Projet IT", subtitle: "Méthodologie ITIL", details: "Pilotage de projets IT de bout en bout selon les bonnes pratiques ITIL : cadrage, planification, coordination des intervenants, déploiement et suivi post-projet." },
      en: { title: "IT Project Management", subtitle: "ITIL Methodology", details: "End-to-end delivery of IT projects following ITIL best practices: scoping, planning, stakeholder coordination, deployment and post-project follow-up." }
    },
    {
      fr: { title: "Maintenance & Support", subtitle: "Support technique · Réponse aux incidents", details: "Maintenance préventive et corrective, diagnostic et résolution d'incidents, support technique de niveau 2/3 et accompagnement des utilisateurs." },
      en: { title: "Maintenance & Support", subtitle: "Technical Support · Incident Response", details: "Preventive and corrective maintenance, incident diagnosis and resolution, level 2/3 technical support and user assistance." }
    }
  ],

  /* ---- Certifications ---- */
  certifications: [
    {
      fr: { title: "Nutanix Certified Professional – Multicloud Infrastructure", subtitle: "Certification Nutanix", details: "Certification avancée validant les compétences de déploiement, configuration et gestion d'infrastructures multicloud sur la plateforme Nutanix Cloud Platform (AHV, Prism, stockage distribué)." },
      en: { title: "Nutanix Certified Professional – Multicloud Infrastructure", subtitle: "Nutanix Certification", details: "Advanced certification validating skills in deploying, configuring and managing multicloud infrastructures on the Nutanix Cloud Platform (AHV, Prism, distributed storage)." }
    },
    {
      fr: { title: "Nutanix Certified Associate (NCA)", subtitle: "Certification Nutanix", details: "Certification fondamentale attestant des connaissances de base sur l'architecture, l'administration et l'exploitation des solutions Nutanix." },
      en: { title: "Nutanix Certified Associate (NCA)", subtitle: "Nutanix Certification", details: "Foundational certification demonstrating core knowledge of the architecture, administration and operation of Nutanix solutions." }
    },
    {
      fr: { title: "Nutanix Certified Services – Core Associate", subtitle: "Certification Nutanix", details: "Certification orientée services validant la capacité à installer, configurer et dépanner les environnements Nutanix dans un contexte projet." },
      en: { title: "Nutanix Certified Services – Core Associate", subtitle: "Nutanix Certification", details: "Services-oriented certification validating the ability to install, configure and troubleshoot Nutanix environments in a project context." }
    },
    {
      fr: { title: "Kaspersky Next EDR – Foundation & Optimum", subtitle: "Certification Kaspersky", details: "Certifications couvrant le déploiement et l'administration des solutions de détection et réponse aux menaces (EDR) Kaspersky Next, niveaux Foundation et Optimum." },
      en: { title: "Kaspersky Next EDR – Foundation & Optimum", subtitle: "Kaspersky Certification", details: "Certifications covering the deployment and administration of Kaspersky Next Endpoint Detection & Response (EDR) solutions, at Foundation and Optimum levels." }
    },
    {
      fr: { title: "Veeam Technical Sales Professional", subtitle: "Certification Veeam", details: "Certification validant l'expertise technique et commerciale sur les solutions de sauvegarde et de reprise d'activité Veeam." },
      en: { title: "Veeam Technical Sales Professional", subtitle: "Veeam Certification", details: "Certification validating technical and sales expertise on Veeam backup and disaster-recovery solutions." }
    }
  ],

  /* ---- Projets réalisés ---- */
  projects: [
    {
      fr: { title: "Modernisation d'un datacenter", tags: ["Nutanix", "Veeam", "Fortinet"], summary: "Déploiement de deux clusters Nutanix AHV pour deux sites en production et réplication.", details: "Mise en place de deux clusters Nutanix AHV pour deux sites (production et réplication) : 4 noeuds pour le cluster de production et 4 noeuds pour le cluster de réplication, deux switches Netgear niveau 2, un backbone, 1 Forti (par site). Migration des serveurs de l'ancienne infrastructure (vCenter) vers la nouvelle avec Nutanix Move. Mise en place des deux plateformes de sauvegarde avec Veeam BR. Une baie QNAP de sauvegarde pour chaque site. Configuration de la réplication entre les deux sites et entre les deux plateformes de sauvegarde." },
      en: { title: "Datacenter Modernization", tags: ["Nutanix", "Veeam", "Fortinet"], summary: "Deployment of two Nutanix AHV clusters across two sites for production and replication.", details: "Deployment of two Nutanix AHV clusters for two sites (production and replication): 4 nodes for the production cluster and 4 nodes for the replication cluster, two Netgear Layer 2 switches, one backbone, 1 Forti firewall per site. Migration of servers from the legacy infrastructure (vCenter) to the new one using Nutanix Move. Deployment of two backup platforms with Veeam BR, with a QNAP backup array on each site. Configuration of replication between the two sites and between the two backup platforms." }
    },
    {
      fr: { title: "Mise à niveau d'une infrastructure hyperconvergée (HCI)", tags: ["Nutanix", "Fortinet"], summary: "Déploiement d'un cluster Nutanix AHV de 4 noeuds et conversion d'un site en secours.", details: "Mise en place d'un cluster Nutanix AHV : 4 noeuds. Configuration réseau et sécurité : deux switches Netgear niveau 2, un backbone, 1 Forti. Migration des serveurs de l'ancienne infrastructure (Nutanix VMware) vers la nouvelle avec Nutanix Move. Conversion de l'ancienne infrastructure Nutanix VMware en Nutanix AHV pour en faire un site de secours. Configuration de la réplication entre les deux sites." },
      en: { title: "Hyperconverged Infrastructure (HCI) Upgrade", tags: ["Nutanix", "Fortinet"], summary: "4-node Nutanix AHV cluster deployment with conversion of a legacy site into a DR site.", details: "Deployment of a Nutanix AHV cluster: 4 nodes. Network and security configuration: two Netgear Layer 2 switches, one backbone, 1 Forti firewall. Migration of servers from the legacy infrastructure (Nutanix VMware) to the new one using Nutanix Move. Conversion of the legacy Nutanix VMware infrastructure into Nutanix AHV to serve as a disaster recovery site. Configuration of replication between the two sites." }
    },
    {
      fr: { title: "Mise en oeuvre d'une infrastructure hyperconvergée (HCI)", tags: ["Nutanix", "Veeam", "Fortinet"], summary: "Cluster Nutanix AHV de 3 noeuds avec plateforme de sauvegarde Veeam et baie HPE MSA1060.", details: "Mise en place d'un cluster Nutanix AHV : 3 noeuds. Configuration réseau et sécurité : deux switches Netgear niveau 2, un backbone, 1 Forti. Migration des serveurs de l'ancienne infrastructure vers la nouvelle avec Nutanix Move. Mise en place de la plateforme de sauvegarde avec Veeam BR : une baie HPE MSA1060 de sauvegarde sur le site." },
      en: { title: "Hyperconverged Infrastructure (HCI) Implementation", tags: ["Nutanix", "Veeam", "Fortinet"], summary: "3-node Nutanix AHV cluster with Veeam backup platform and HPE MSA1060 storage array.", details: "Deployment of a Nutanix AHV cluster: 3 nodes. Network and security configuration: two Netgear Layer 2 switches, one backbone, 1 Forti firewall. Migration of servers from the legacy infrastructure to the new one using Nutanix Move. Deployment of the backup platform with Veeam BR: an HPE MSA1060 backup array on site." }
    },
    {
      fr: { title: "Mise à niveau d'une infrastructure informatique", tags: ["VMware", "Veeam"], summary: "Cluster VMware vSphere 2 noeuds avec stockage SAN HPE et sauvegarde Dell DataDomain.", details: "Mise en place d'un cluster VMware vCenter ESXi : 2 noeuds. Configuration du réseau de stockage SAN avec une baie HPE MSA1060. Migration des serveurs physiques vers la nouvelle infrastructure avec VMware Converter. Configuration de la plateforme de sauvegarde avec Veeam : une baie de sauvegarde Dell DataDomain." },
      en: { title: "IT Infrastructure Upgrade", tags: ["VMware", "Veeam"], summary: "2-node VMware vSphere cluster with HPE SAN storage and Dell DataDomain backup.", details: "Deployment of a VMware vCenter ESXi cluster: 2 nodes. SAN storage network configuration with an HPE MSA1060 array. Migration of physical servers to the new infrastructure using VMware Converter. Backup platform configuration with Veeam: a Dell DataDomain backup array." }
    },
    {
      fr: { title: "Mise en place d'une infrastructure virtuelle", tags: ["VMware", "Veeam", "Fortinet", "Active Directory"], summary: "Cluster VMware 2 noeuds, sécurité Fortinet, création des serveurs virtuels dont l'AD.", details: "Mise en place d'un cluster VMware vCenter ESXi : 2 noeuds. Configuration du réseau de stockage SAN avec une baie HPE MSA1060. Configuration réseau et sécurité : un switch niveau 2, 1 firewall Forti. Création et configuration des serveurs virtuels, y compris le serveur Active Directory. Configuration de la plateforme de sauvegarde avec Veeam : une baie de sauvegarde NAS Synology." },
      en: { title: "Virtual Infrastructure Deployment", tags: ["VMware", "Veeam", "Fortinet", "Active Directory"], summary: "2-node VMware cluster, Fortinet security, creation of virtual servers including AD.", details: "Deployment of a VMware vCenter ESXi cluster: 2 nodes. SAN storage network configuration with an HPE MSA1060 array. Network and security configuration: one Layer 2 switch, 1 Forti firewall. Creation and configuration of virtual servers, including the Active Directory server. Backup platform configuration with Veeam: a Synology NAS backup array." }
    },
    {
      fr: { title: "Mise en place d'une infrastructure réseaux et systèmes", tags: ["VMware", "Veeam", "Fortinet"], summary: "Cluster VMware 2 noeuds, firewalls Palo Alto et Forti, sauvegardes locales et répliquées.", details: "Mise en place d'un cluster VMware vCenter ESXi : 2 noeuds. Configuration du réseau de stockage SAN avec une baie HPE MSA1060. Configuration réseau et sécurité : un switch niveau 2, 1 firewall Palo Alto et Forti sur le site de réplication. Création et configuration des serveurs virtuels, y compris le serveur Active Directory et de messagerie. Configuration de la plateforme de sauvegarde avec Veeam : les sauvegardes sont en local et les réplications sont sur un NAS Synology." },
      en: { title: "Network & Systems Infrastructure Deployment", tags: ["VMware", "Veeam", "Fortinet"], summary: "2-node VMware cluster, Palo Alto and Forti firewalls, local backups with off-site replication.", details: "Deployment of a VMware vCenter ESXi cluster: 2 nodes. SAN storage network configuration with an HPE MSA1060 array. Network and security configuration: one Layer 2 switch, one Palo Alto firewall, and a Forti firewall on the replication site. Creation and configuration of virtual servers, including Active Directory and mail servers. Backup platform configuration with Veeam: backups kept locally with replication to a Synology NAS." }
    },
    {
      fr: { title: "Refonte d'une infrastructure informatique (VMware)", tags: ["VMware", "Veeam", "Fortinet"], summary: "Cluster VMware réparti sur deux sites, 5 agences reliées, sauvegarde et réplication centralisées.", details: "Mise en place d'un cluster VMware vCenter ESXi : 2 noeuds (site de production) et 1 noeud (site de réplication). Configuration du réseau de stockage SAN avec une baie HPE MSA1060. Configuration réseau et sécurité : un switch niveau 2, 2 firewalls Forti (site production) et 1 Forti et 1 switch sur le site de réplication et les 5 agences. Création et configuration des serveurs virtuels, y compris le serveur Active Directory et de messagerie. Configuration de la plateforme de sauvegarde avec Veeam : les sauvegardes et les réplications sont sur un NAS Synology (site de secours)." },
      en: { title: "IT Infrastructure Overhaul (VMware)", tags: ["VMware", "Veeam", "Fortinet"], summary: "VMware cluster spanning two sites, 5 connected branch offices, centralized backup and replication.", details: "Deployment of a VMware vCenter ESXi cluster: 2 nodes (production site) and 1 node (replication site). SAN storage network configuration with an HPE MSA1060 array. Network and security configuration: one Layer 2 switch, 2 Forti firewalls (production site), and 1 Forti firewall plus 1 switch on the replication site and the 5 branch offices. Creation and configuration of virtual servers, including Active Directory and mail servers. Backup platform configuration with Veeam: backups and replication stored on a Synology NAS (DR site)." }
    },
    {
      fr: { title: "Refonte d'une infrastructure informatique (Hyper-V)", tags: ["Hyper-V", "Active Directory"], summary: "Cluster Windows Server Hyper-V 2 noeuds avec stockage SAN et sécurité Fortinet.", details: "Mise en place d'un cluster Windows Server Hyper-V avec deux noeuds. Configuration du réseau de stockage SAN avec la baie HPE MSA1060. Configuration réseau et sécurité : deux switches niveau 2, 1 firewall Forti. Création et configuration des serveurs virtuels, y compris le serveur Active Directory." },
      en: { title: "IT Infrastructure Overhaul (Hyper-V)", tags: ["Hyper-V", "Active Directory"], summary: "2-node Windows Server Hyper-V cluster with SAN storage and Fortinet security.", details: "Deployment of a 2-node Windows Server Hyper-V cluster. SAN storage network configuration with an HPE MSA1060 array. Network and security configuration: two Layer 2 switches, 1 Forti firewall. Creation and configuration of virtual servers, including the Active Directory server." }
    },
    {
      fr: { title: "Audit d'un parc informatique", tags: ["Audit", "Active Directory"], summary: "Inventaire matériel/logiciel et audit réseaux, systèmes et Active Directory.", details: "Inventaire matériel et logiciel, audit réseaux et systèmes, audit Active Directory. Rédaction d'un rapport d'audit et proposition technique pour les actions de remédiation." },
      en: { title: "IT Estate Audit", tags: ["Audit", "Active Directory"], summary: "Hardware/software inventory and audit of networks, systems and Active Directory.", details: "Hardware and software inventory, network and systems audit, Active Directory audit. Drafting of an audit report and technical proposal for remediation actions." }
    },
    {
      fr: { title: "Audit d'un domaine Active Directory", tags: ["Audit", "Active Directory"], summary: "Audit complet du domaine Active Directory avec plan de remédiation.", details: "Audit Active Directory. Rédaction d'un rapport d'audit et mise en place des actions de remédiation." },
      en: { title: "Active Directory Domain Audit", tags: ["Audit", "Active Directory"], summary: "Full Active Directory domain audit with a remediation plan.", details: "Active Directory audit. Drafting of an audit report and implementation of remediation actions." }
    },
    {
      fr: { title: "Remédiation suite à un audit de pentesting", tags: ["Sécurité", "Active Directory", "GPO"], summary: "Exploitation d'un rapport de pentest : nettoyage de l'annuaire, GPO et upgrade des contrôleurs.", details: "Exploitation du rapport d'audit, nettoyage de l'annuaire et mise en place des GPO. Upgrade des contrôleurs de domaine vers 2022." },
      en: { title: "Remediation Following a Pentest Audit", tags: ["Security", "Active Directory", "GPO"], details: "Implementation of audit report findings, directory cleanup, and GPO deployment. Upgrade of domain controllers to Windows Server 2022.", summary: "Implementation of pentest findings: directory cleanup, GPOs, and controller upgrades." }
    },
    {
      fr: { title: "Audit d'une infrastructure VMware", tags: ["Audit", "VMware"], summary: "Audit complet d'une infrastructure VMware avec plan de remédiation.", details: "Audit de l'infrastructure VMware. Rédaction d'un rapport d'audit et mise en place des actions de remédiation." },
      en: { title: "VMware Infrastructure Audit", tags: ["Audit", "VMware"], summary: "Full VMware infrastructure audit with a remediation plan.", details: "VMware infrastructure audit. Drafting of an audit report and implementation of remediation actions." }
    }
  ]
};

let currentLang = 'fr';

/* Récupère le contenu dans la langue demandée. Si une traduction manque pour un
   élément, avertit dans la console et bascule sur le français par sécurité. */
function getLocalized(item, lang) {
  if (item[lang]) return item[lang];
  console.warn('Traduction manquante ("' + lang + '") pour :', item.fr ? item.fr.title : item);
  return item.fr || item.en;
}

/* ===================== RENDU : PROJETS (grandes cartes) ===================== */
function renderProjects(lang) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  const btnLabel = lang === 'en' ? 'View details' : 'Voir les détails';

  grid.innerHTML = contentData.projects.map(function (item, i) {
    const t = getLocalized(item, lang);
    const tags = (t.tags || []).map(function (tag) { return '<span class="tag">' + tag + '</span>'; }).join('');
    return (
      '<div class="project-card">' +
        '<h3>' + t.title + '</h3>' +
        '<div class="tag-list">' + tags + '</div>' +
        '<p class="summary">' + t.summary + '</p>' +
        '<button class="btn-details" onclick="openInfoModal(\'projects\', ' + i + ')">' + btnLabel + '</button>' +
      '</div>'
    );
  }).join('');
}

/* ===================== RENDU : TILES (profil / competences / certifications) ===================== */
function renderTiles(containerId, sectionKey, lang) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = contentData[sectionKey] || [];
  const btnLabel = lang === 'en' ? 'See more' : 'Voir plus';

  el.innerHTML = list.map(function (item, i) {
    const t = getLocalized(item, lang);
    const badge = sectionKey === 'profile'
      ? '<span class="tile-index">' + String(i + 1).padStart(2, '0') + '</span>'
      : '';
    const subtitle = t.subtitle ? '<p class="tile-subtitle">' + t.subtitle + '</p>' : '';
    return (
      '<div class="tile-card">' +
        badge +
        '<div class="tile-head">' +
          '<h3>' + t.title + '</h3>' +
          '<button class="btn-more" onclick="openInfoModal(\'' + sectionKey + '\', ' + i + ')">' + btnLabel + ' &rarr;</button>' +
        '</div>' +
        subtitle +
      '</div>'
    );
  }).join('');
}

/* ===================== MODALE GENERIQUE ===================== */
function openInfoModal(section, index) {
  const item = contentData[section] && contentData[section][index];
  if (!item) return;
  const t = getLocalized(item, currentLang);

  document.getElementById('modal-title').textContent = t.title;

  const tagsHtml = (t.tags || []).map(function (tag) { return '<span class="tag">' + tag + '</span>'; }).join('');
  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = tagsHtml;
  tagsEl.style.display = tagsHtml ? 'flex' : 'none';

  document.getElementById('modal-details').textContent = t.details;
  document.getElementById('info-modal').classList.add('open');
}

function closeModal() {
  document.getElementById('info-modal').classList.remove('open');
}

/* ===================== GESTION LANGUE ===================== */
function setLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(function (el) {
    el.classList.toggle('lang-hidden', el.getAttribute('data-lang') !== lang);
  });

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.dataset.setlang === lang);
  });

  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('portfolio-lang', lang);

  currentLang = lang;
  renderProjects(lang);
  renderTiles('profile-grid', 'profile', lang);
  renderTiles('skills-grid', 'skills', lang);
  renderTiles('certifications-grid', 'certifications', lang);
}

window.addEventListener('DOMContentLoaded', function () {
  const savedLang = localStorage.getItem('portfolio-lang') || 'fr';
  setLang(savedLang);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});