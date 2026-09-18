/* ===================== DONNEES (FR / EN regroupées par item) =====================
   Le champ "details" est du HTML (titres <h4>, listes <ul>/<ol>) affiché tel
   quel dans la fenêtre modale, pour permettre une structure claire en étapes.
   "title", "subtitle", "summary" restent du texte simple. */

const contentData = {

  /* ---- Compétences ---- */
  skills: [
    {
      fr: {
        title: "Appels d'offres, Avant-vente &amp; Relation Client",
        details: "<p>Analyse des cahiers des charges et des besoins clients, étude et sélection des solutions adaptées, comparaison des solutions techniques, élaboration des réponses techniques et financières avec l'équipe commerciale. Ce travail d'avant-vente s'accompagne d'un suivi de la relation client tout au long des projets : animation de réunions techniques, présentation des solutions et architectures, recueil des besoins et coordination des différents intervenants (client, équipe technique, partenaires).</p>"
      },
      en: {
        title: "Tenders, Pre-Sales &amp; Client Relations",
        details: "<p>Analysis of specifications and client needs, review and selection of suitable solutions, comparison of technical options, drafting of technical and financial proposals with the sales team. This pre-sales work goes hand in hand with ongoing client relationship management throughout projects: facilitating technical meetings, presenting solutions and architectures, gathering requirements and coordinating the various stakeholders (client, technical team, partners).</p>"
      }
    },
    {
      fr: {
        title: "Gestion de Projets IT &amp; ITIL",
        subtitle: "Méthodologie ITIL",
        details: "<p>Gestion des projets de bout en bout selon les bonnes pratiques de la méthodologie ITIL, de la réunion de démarrage au déploiement, en passant par la planification, la coordination des intervenants, le suivi des actions, la mise en service, la recette et le suivi post-déploiement.</p>"
      },
      en: {
        title: "IT Project Management &amp; ITIL",
        subtitle: "ITIL Methodology",
        details: "<p>End-to-end project management following ITIL best practices, from the kickoff meeting to deployment, including planning, stakeholder coordination, action tracking, go-live, acceptance testing and post-deployment follow-up.</p>"
      }
    },
    {
      fr: {
        title: "Administration Serveurs &amp; Postes de Travail",
        subtitle: "Windows Server · Linux",
        details: "<p>Installation, administration, configuration et maintenance des environnements Windows Server et Linux, ainsi que des postes de travail Windows ; gestion des services systèmes, diagnostic et résolution des incidents et assistance technique.</p>"
      },
      en: {
        title: "Server &amp; Workstation Administration",
        subtitle: "Windows Server · Linux",
        details: "<p>Installation, administration, configuration and maintenance of Windows Server and Linux environments, as well as Windows workstations; management of system services, incident diagnosis and resolution, and technical support.</p>"
      }
    },
    {
      fr: {
        title: "Virtualisation &amp; Infrastructure",
        subtitle: "VMware · Nutanix · Proxmox · Hyper-V",
        details: "<p>Conception, déploiement et administration d'environnements virtualisés et d'infrastructures hyperconvergées ou SAN, sur plusieurs plateformes selon les besoins et le contexte du client (entreprise ou PME).</p><h4>VMware</h4><p>Installation et configuration des hôtes ESXi, déploiement et administration de vCenter Server, création et gestion de clusters avec High Availability (HA) et DRS, configuration réseau (vSwitches standards et distribués), configuration du stockage (SAN, datastores), vMotion et Storage vMotion, ainsi que VMware Horizon pour les environnements VDI.</p><h4>Nutanix</h4><p>Installation et configuration de clusters Nutanix AOS/AHV via Foundation, administration au travers de Prism Element (par cluster) et Prism Central (supervision multi-clusters), configuration réseau et stockage, migration de charges de travail avec Nutanix Move, et mise en place de la réplication et des plans de reprise entre clusters.</p><h4>Proxmox VE</h4><p>Installation des nœuds Proxmox, création et administration de clusters (quorum, groupes HA, fencing), configuration réseau (bridges, VLANs) et stockage (local, NFS, iSCSI, Ceph), ainsi que déploiements en mode standalone pour les environnements plus restreints.</p><h4>Hyper-V</h4><p>Installation et configuration des hôtes Hyper-V et des clusters de basculement, volumes partagés de cluster (CSV), Live Migration, configuration des commutateurs virtuels et du stockage, intégration avec Active Directory.</p>"
      },
      en: {
        title: "Virtualization &amp; Infrastructure",
        subtitle: "VMware · Nutanix · Proxmox · Hyper-V",
        details: "<p>Design, deployment and administration of virtualized environments and hyperconverged or SAN-based infrastructures, across multiple platforms depending on the client's needs and context (enterprise or SMB).</p><h4>VMware</h4><p>Installation and configuration of ESXi hosts, deployment and administration of vCenter Server, creation and management of clusters with High Availability (HA) and DRS, network configuration (standard and distributed vSwitches), storage configuration (SAN, datastores), vMotion and Storage vMotion, as well as VMware Horizon for VDI environments.</p><h4>Nutanix</h4><p>Installation and configuration of Nutanix AOS/AHV clusters via Foundation, administration through Prism Element (per-cluster) and Prism Central (multi-cluster oversight), network and storage configuration, workload migration with Nutanix Move, and setup of replication and disaster recovery plans between clusters.</p><h4>Proxmox VE</h4><p>Installation of Proxmox nodes, cluster creation and administration (quorum, HA groups, fencing), network configuration (bridges, VLANs) and storage (local, NFS, iSCSI, Ceph), as well as standalone deployments for smaller environments.</p><h4>Hyper-V</h4><p>Installation and configuration of Hyper-V hosts and failover clusters, Cluster Shared Volumes (CSV), Live Migration, virtual switch and storage configuration, and integration with Active Directory.</p>"
      }
    },
    {
      fr: {
        title: "Identité &amp; Annuaire",
        subtitle: "Active Directory · GPO · DNS · Microsoft 365 · Entra Connect",
        details: "<p>Administration d'annuaires Active Directory, stratégies de groupe (GPO) et DNS, ainsi que synchronisation d'identité hybride avec Microsoft Entra Connect et gestion Microsoft 365.</p>"
      },
      en: {
        title: "Identity &amp; Directory Services",
        subtitle: "Active Directory · GPO · DNS · Microsoft 365 · Entra Connect",
        details: "<p>Administration of Active Directory, Group Policy (GPO) and DNS, along with hybrid identity synchronization via Microsoft Entra Connect and Microsoft 365 management.</p>"
      }
    },
    {
      fr: {
        title: "Sécurité &amp; Contrôle d'Accès",
        subtitle: "Wallix Bastion · Kaspersky",
        details: "<p>Mise en place et administration de solutions de sécurisation des accès à privilèges (Wallix Bastion) et de protection des postes et serveurs (Kaspersky Next EDR).</p>"
      },
      en: {
        title: "Security &amp; Access Control",
        subtitle: "Wallix Bastion · Kaspersky",
        details: "<p>Deployment and administration of privileged access security solutions (Wallix Bastion) and endpoint/server protection (Kaspersky Next EDR).</p>"
      }
    },
    {
      fr: {
        title: "Sauvegarde &amp; Réplication",
        subtitle: "Veeam Backup &amp; Replication · Veeam ONE · Veeam for M365",
        details: "<p>Expertise sur l'écosystème Veeam pour la protection des données, la réplication et la reprise d'activité, sur les environnements Windows, Linux et SaaS.</p><h4>Veeam Backup &amp; Replication (Windows)</h4><p>Installation et configuration du serveur VBR, ajout de l'infrastructure de virtualisation (vCenter, Nutanix, Hyper-V) et des repositories (stockage local, NAS, appliances de déduplication), création et administration des tâches de sauvegarde, configuration de la réplication de VM entre sites, et opérations de restauration (VM complète, fichiers, Instant Recovery).</p><h4>Veeam Backup for Linux (VSA)</h4><p>Déploiement de l'appliance Veeam Backup for Linux pour l'administration des repositories et des composants d'infrastructure de sauvegarde sous Linux.</p><h4>Veeam ONE</h4><p>Installation et configuration de Veeam ONE pour la supervision et le reporting des tâches de sauvegarde, de la santé de l'infrastructure et de la planification de capacité.</p><h4>Veeam Backup for Microsoft 365</h4><p>Installation et configuration de Veeam Backup for M365, connexion au tenant Microsoft 365, création des tâches de sauvegarde (Exchange Online, SharePoint, OneDrive, Teams) et opérations de restauration.</p>"
      },
      en: {
        title: "Backup &amp; Replication",
        subtitle: "Veeam Backup &amp; Replication · Veeam ONE · Veeam for M365",
        details: "<p>Expertise across the Veeam ecosystem for data protection, replication and disaster recovery, spanning Windows, Linux and SaaS environments.</p><h4>Veeam Backup &amp; Replication (Windows)</h4><p>Installation and configuration of the VBR server, adding virtualization infrastructure (vCenter, Nutanix, Hyper-V) and repositories (local storage, NAS, deduplication appliances), creation and administration of backup jobs, configuration of VM replication between sites, and restore operations (full VM, file-level, Instant Recovery).</p><h4>Veeam Backup for Linux (VSA)</h4><p>Deployment of the Veeam Backup for Linux appliance to manage repositories and backup infrastructure components on Linux.</p><h4>Veeam ONE</h4><p>Installation and configuration of Veeam ONE for monitoring and reporting on backup jobs, infrastructure health and capacity planning.</p><h4>Veeam Backup for Microsoft 365</h4><p>Installation and configuration of Veeam Backup for M365, connection to the Microsoft 365 tenant, creation of backup jobs (Exchange Online, SharePoint, OneDrive, Teams) and restore operations.</p>"
      }
    },
    {
      fr: {
        title: "Scripting &amp; Automatisation",
        subtitle: "Python · PowerShell",
        details: "<p>Développement de scripts d'automatisation et d'administration système avec Python et PowerShell.</p>"
      },
      en: {
        title: "Scripting &amp; Automation",
        subtitle: "Python · PowerShell",
        details: "<p>Development of automation and system administration scripts using Python and PowerShell.</p>"
      }
    },
    {
      fr: {
        title: "Normes &amp; Conformité",
        subtitle: "ISO 27001/27005 · ANSSI · DISA STIG · NIS2",
        details: "<p>Bonnes connaissances des référentiels de sécurité ISO 27001/27005, des recommandations ANSSI, des guides de durcissement DISA STIG et de la directive européenne NIS2.</p>"
      },
      en: {
        title: "Standards &amp; Compliance",
        subtitle: "ISO 27001/27005 · ANSSI · DISA STIG · NIS2",
        details: "<p>Solid knowledge of the ISO 27001/27005 security frameworks, ANSSI recommendations, DISA STIG hardening guides and the EU NIS2 directive.</p>"
      }
    },
    {
      fr: {
        title: "Maintenance &amp; Support",
        subtitle: "Support technique · Réponse aux incidents",
        details: "<p>Maintenance préventive et corrective, diagnostic et résolution d'incidents, support technique de niveau 2/3 et accompagnement des clients et utilisateurs.</p>"
      },
      en: {
        title: "Maintenance &amp; Support",
        subtitle: "Technical Support · Incident Response",
        details: "<p>Preventive and corrective maintenance, incident diagnosis and resolution, level 2/3 technical support and assistance to clients and users.</p>"
      }
    },
    {
      fr: {
        title: "Documentation &amp; Livrables Projets",
        details: "<p>Élaboration des BOM (Bill of Materials) et des LLD (Low-Level Design) en phase de conception, préparation des documents techniques et des offres financières avec l'équipe commerciale lors des appels d'offres, rédaction des procédures et documents d'exploitation en fin de projet, ainsi que préparation et formalisation des procès-verbaux de recette (PV).</p>"
      },
      en: {
        title: "Documentation &amp; Project Deliverables",
        details: "<p>Preparation of BOMs (Bill of Materials) and LLDs (Low-Level Design) during the design phase, preparation of technical documents and financial proposals with the sales team during tenders, drafting of operating procedures and documentation at project close, and preparation of acceptance sign-off reports.</p>"
      }
    },
    {
      fr: {
        title: "Formation, Veille &amp; Accompagnement",
        details: "<p>Participation à des webinaires, formations techniques et ateliers chez les partenaires technologiques, développement continu des compétences et préparation de certifications professionnelles sur les technologies et solutions d'infrastructure. Ce même goût pour la transmission se retrouve dans l'accompagnement des stagiaires et nouveaux collaborateurs : partage des bonnes pratiques et suivi de leur montée en compétences sur les systèmes, la virtualisation et les infrastructures IT.</p>"
      },
      en: {
        title: "Training, Technology Watch &amp; Mentoring",
        details: "<p>Participation in webinars, technical training and workshops with technology partners, continuous skills development and preparation for professional certifications on infrastructure technologies and solutions. This same interest in knowledge-sharing carries over to mentoring interns and new team members: sharing best practices and supporting their skill development in systems, virtualization and IT infrastructure.</p>"
      }
    }
  ],

  /* ---- Certifications ---- */
  certifications: [
    {
      fr: { title: "Nutanix Certified Professional – Multicloud Infrastructure", subtitle: "Certification Nutanix", details: "<p>Certification avancée validant les compétences de déploiement, configuration et gestion d'infrastructures multicloud sur la plateforme Nutanix Cloud Platform (AHV, Prism, stockage distribué).</p>" },
      en: { title: "Nutanix Certified Professional – Multicloud Infrastructure", subtitle: "Nutanix Certification", details: "<p>Advanced certification validating skills in deploying, configuring and managing multicloud infrastructures on the Nutanix Cloud Platform (AHV, Prism, distributed storage).</p>" }
    },
    {
      fr: { title: "Nutanix Certified Associate (NCA)", subtitle: "Certification Nutanix", details: "<p>Certification fondamentale attestant des connaissances de base sur l'architecture, l'administration et l'exploitation des solutions Nutanix.</p>" },
      en: { title: "Nutanix Certified Associate (NCA)", subtitle: "Nutanix Certification", details: "<p>Foundational certification demonstrating core knowledge of the architecture, administration and operation of Nutanix solutions.</p>" }
    },
    {
      fr: { title: "Nutanix Certified Services – Core Associate", subtitle: "Certification Nutanix", details: "<p>Certification orientée services validant la capacité à installer, configurer et dépanner les environnements Nutanix dans un contexte projet.</p>" },
      en: { title: "Nutanix Certified Services – Core Associate", subtitle: "Nutanix Certification", details: "<p>Services-oriented certification validating the ability to install, configure and troubleshoot Nutanix environments in a project context.</p>" }
    },
    {
      fr: { title: "Kaspersky Next EDR – Foundation &amp; Optimum", subtitle: "Certification Kaspersky", details: "<p>Certifications couvrant le déploiement et l'administration des solutions de détection et réponse aux menaces (EDR) Kaspersky Next, niveaux Foundation et Optimum.</p>" },
      en: { title: "Kaspersky Next EDR – Foundation &amp; Optimum", subtitle: "Kaspersky Certification", details: "<p>Certifications covering the deployment and administration of Kaspersky Next Endpoint Detection &amp; Response (EDR) solutions, at Foundation and Optimum levels.</p>" }
    },
    {
      fr: { title: "Veeam Technical Sales Professional", subtitle: "Certification Veeam", details: "<p>Certification validant l'expertise technique et commerciale sur les solutions de sauvegarde et de reprise d'activité Veeam.</p>" },
      en: { title: "Veeam Technical Sales Professional", subtitle: "Veeam Certification", details: "<p>Certification validating technical and sales expertise on Veeam backup and disaster-recovery solutions.</p>" }
    }
  ],

  /* ---- Projets réalisés ---- */
  projects: [
    {
      fr: {
        title: "Modernisation d'un datacenter",
        tags: ["Nutanix", "Veeam", "Fortinet"],
        summary: "Déploiement de deux clusters Nutanix AHV pour deux sites en production et réplication.",
        details: "<h4>Contexte</h4><p>Modernisation de l'infrastructure d'un client par le remplacement de l'environnement existant par deux clusters Nutanix hyperconvergés répartis sur un site de production et un site de réplication, afin de sécuriser les données et la continuité de service.</p><h4>Matériel &amp; Licences</h4><ul><li>2 clusters Nutanix AHV : 4 nœuds sur le site de production, 4 nœuds sur le site de réplication</li><li>2 switches Netgear niveau 2 (un par site) et backbone inter-sites</li><li>1 pare-feu Fortinet par site</li><li>2 baies QNAP de sauvegarde (une par site)</li><li>Licences Nutanix AOS/AHV, Nutanix Move, Veeam Backup &amp; Replication</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Préparation réseau :</strong> câblage, configuration des switches niveau 2, du backbone et des pare-feux Fortinet sur chaque site.</li><li><strong>Installation des clusters :</strong> déploiement du Foundation Nutanix sur les 8 nœuds et formation des deux clusters AOS/AHV (4 nœuds par site).</li><li><strong>Configuration Prism Element :</strong> réseaux virtuels, pools et conteneurs de stockage sur chaque cluster.</li><li><strong>Déploiement de Prism Central :</strong> supervision centralisée des deux clusters, tableaux de bord et alerting.</li><li><strong>Migration :</strong> utilisation de Nutanix Move pour migrer les VMs de l'ancienne infrastructure vCenter vers les nouveaux clusters AHV.</li><li><strong>Sauvegarde :</strong> installation et configuration de Veeam Backup &amp; Replication, intégration des baies QNAP comme repositories sur chaque site.</li><li><strong>Réplication :</strong> configuration de la réplication asynchrone entre les deux clusters Nutanix et entre les deux plateformes de sauvegarde Veeam.</li><li><strong>Tests :</strong> tests de bascule (failover/failback) et validation du plan de reprise d'activité.</li></ol>"
      },
      en: {
        title: "Datacenter Modernization",
        tags: ["Nutanix", "Veeam", "Fortinet"],
        summary: "Deployment of two Nutanix AHV clusters across two sites for production and replication.",
        details: "<h4>Context</h4><p>Modernization of a client's infrastructure by replacing the existing environment with two hyperconverged Nutanix clusters spread across a production site and a replication site, to secure data and ensure service continuity.</p><h4>Hardware &amp; Licenses</h4><ul><li>2 Nutanix AHV clusters: 4 nodes on the production site, 4 nodes on the replication site</li><li>2 Netgear Layer 2 switches (one per site) and inter-site backbone</li><li>1 Fortinet firewall per site</li><li>2 QNAP backup arrays (one per site)</li><li>Nutanix AOS/AHV, Nutanix Move and Veeam Backup &amp; Replication licenses</li></ul><h4>Deployment Steps</h4><ol><li><strong>Network preparation:</strong> cabling, configuration of Layer 2 switches, backbone and Fortinet firewalls on each site.</li><li><strong>Cluster installation:</strong> Nutanix Foundation deployment on the 8 nodes and formation of the two AOS/AHV clusters (4 nodes per site).</li><li><strong>Prism Element configuration:</strong> virtual networks, storage pools and containers on each cluster.</li><li><strong>Prism Central deployment:</strong> centralized oversight of both clusters, dashboards and alerting.</li><li><strong>Migration:</strong> use of Nutanix Move to migrate VMs from the legacy vCenter infrastructure to the new AHV clusters.</li><li><strong>Backup:</strong> installation and configuration of Veeam Backup &amp; Replication, integration of the QNAP arrays as repositories on each site.</li><li><strong>Replication:</strong> configuration of asynchronous replication between the two Nutanix clusters and between the two Veeam backup platforms.</li><li><strong>Testing:</strong> failover/failback testing and validation of the disaster recovery plan.</li></ol>"
      }
    },
    {
      fr: {
        title: "Mise à niveau d'une infrastructure hyperconvergée (HCI)",
        tags: ["Nutanix", "Fortinet"],
        summary: "Déploiement d'un cluster Nutanix AHV de 4 noeuds et conversion d'un site en secours.",
        details: "<h4>Contexte</h4><p>Montée en gamme de l'infrastructure de production d'un client avec le déploiement d'un nouveau cluster Nutanix AHV, et transformation de l'ancienne infrastructure Nutanix (sous hyperviseur VMware) en site de secours sous AHV.</p><h4>Matériel &amp; Licences</h4><ul><li>1 cluster Nutanix AHV neuf : 4 nœuds</li><li>2 switches Netgear niveau 2 et backbone</li><li>1 pare-feu Fortinet</li><li>Licence Nutanix Move pour la migration</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Préparation réseau et sécurité :</strong> mise en place des switches niveau 2, du backbone et du pare-feu Fortinet.</li><li><strong>Installation du nouveau cluster :</strong> Foundation Nutanix sur les 4 nœuds, formation du cluster AOS/AHV, configuration Prism Element (réseau virtuel, stockage).</li><li><strong>Migration :</strong> migration des VMs depuis l'ancienne infrastructure Nutanix sous hyperviseur VMware vers le nouveau cluster AHV via Nutanix Move.</li><li><strong>Conversion du site de secours :</strong> reconfiguration de l'ancien cluster Nutanix (bascule de l'hyperviseur VMware vers AHV) pour en faire un site de secours homogène avec la production.</li><li><strong>Configuration de la réplication :</strong> mise en place de la réplication entre le nouveau cluster de production et l'ancien cluster reconverti en site de secours.</li><li><strong>Tests :</strong> validation de la réplication et des scénarios de bascule.</li></ol>"
      },
      en: {
        title: "Hyperconverged Infrastructure (HCI) Upgrade",
        tags: ["Nutanix", "Fortinet"],
        summary: "4-node Nutanix AHV cluster deployment with conversion of a legacy site into a DR site.",
        details: "<h4>Context</h4><p>Upgrade of a client's production infrastructure with the deployment of a new Nutanix AHV cluster, and transformation of the legacy Nutanix infrastructure (running the VMware hypervisor) into a disaster recovery site running AHV.</p><h4>Hardware &amp; Licenses</h4><ul><li>1 new Nutanix AHV cluster: 4 nodes</li><li>2 Netgear Layer 2 switches and backbone</li><li>1 Fortinet firewall</li><li>Nutanix Move license for migration</li></ul><h4>Deployment Steps</h4><ol><li><strong>Network and security preparation:</strong> setup of the Layer 2 switches, backbone and Fortinet firewall.</li><li><strong>New cluster installation:</strong> Nutanix Foundation on the 4 nodes, AOS/AHV cluster formation, Prism Element configuration (virtual network, storage).</li><li><strong>Migration:</strong> migration of VMs from the legacy Nutanix infrastructure running the VMware hypervisor to the new AHV cluster using Nutanix Move.</li><li><strong>DR site conversion:</strong> reconfiguration of the legacy Nutanix cluster (switching the hypervisor from VMware to AHV) to turn it into a DR site consistent with the production environment.</li><li><strong>Replication configuration:</strong> setup of replication between the new production cluster and the legacy cluster converted into the DR site.</li><li><strong>Testing:</strong> validation of replication and failover scenarios.</li></ol>"
      }
    },
    {
      fr: {
        title: "Mise en oeuvre d'une infrastructure hyperconvergée (HCI)",
        tags: ["Nutanix", "Veeam", "Fortinet"],
        summary: "Cluster Nutanix AHV de 3 noeuds avec plateforme de sauvegarde Veeam et baie HPE MSA1060.",
        details: "<h4>Contexte</h4><p>Déploiement d'une infrastructure hyperconvergée Nutanix pour un client, avec migration depuis l'ancienne infrastructure et mise en place d'une plateforme de sauvegarde dédiée.</p><h4>Matériel &amp; Licences</h4><ul><li>1 cluster Nutanix AHV : 3 nœuds</li><li>2 switches Netgear niveau 2 et backbone</li><li>1 pare-feu Fortinet</li><li>1 baie HPE MSA1060 de sauvegarde</li><li>Licences Nutanix Move et Veeam Backup &amp; Replication</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Préparation réseau et sécurité :</strong> installation des switches niveau 2, du backbone et du pare-feu Fortinet.</li><li><strong>Installation du cluster :</strong> Foundation Nutanix sur les 3 nœuds, formation du cluster AOS/AHV, configuration Prism Element (réseau virtuel, pools de stockage).</li><li><strong>Migration :</strong> migration des serveurs de l'ancienne infrastructure vers le nouveau cluster AHV avec Nutanix Move.</li><li><strong>Mise en place de la sauvegarde :</strong> installation et configuration de Veeam Backup &amp; Replication, intégration de la baie HPE MSA1060 comme repository de sauvegarde.</li><li><strong>Création des jobs de sauvegarde :</strong> planification des sauvegardes des VMs critiques et définition des politiques de rétention.</li><li><strong>Tests :</strong> tests de restauration et validation de la chaîne de sauvegarde.</li></ol>"
      },
      en: {
        title: "Hyperconverged Infrastructure (HCI) Implementation",
        tags: ["Nutanix", "Veeam", "Fortinet"],
        summary: "3-node Nutanix AHV cluster with Veeam backup platform and HPE MSA1060 storage array.",
        details: "<h4>Context</h4><p>Deployment of a hyperconverged Nutanix infrastructure for a client, including migration from the legacy infrastructure and setup of a dedicated backup platform.</p><h4>Hardware &amp; Licenses</h4><ul><li>1 Nutanix AHV cluster: 3 nodes</li><li>2 Netgear Layer 2 switches and backbone</li><li>1 Fortinet firewall</li><li>1 HPE MSA1060 backup array</li><li>Nutanix Move and Veeam Backup &amp; Replication licenses</li></ul><h4>Deployment Steps</h4><ol><li><strong>Network and security preparation:</strong> installation of the Layer 2 switches, backbone and Fortinet firewall.</li><li><strong>Cluster installation:</strong> Nutanix Foundation on the 3 nodes, AOS/AHV cluster formation, Prism Element configuration (virtual network, storage pools).</li><li><strong>Migration:</strong> migration of servers from the legacy infrastructure to the new AHV cluster using Nutanix Move.</li><li><strong>Backup setup:</strong> installation and configuration of Veeam Backup &amp; Replication, integration of the HPE MSA1060 array as a backup repository.</li><li><strong>Backup job creation:</strong> scheduling of backups for critical VMs and definition of retention policies.</li><li><strong>Testing:</strong> restore testing and validation of the backup chain.</li></ol>"
      }
    },
    {
      fr: {
        title: "Mise en place d'un site de secours HCI Nutanix",
        tags: ["Nutanix", "PRA", "Réplication"],
        summary: "Mise en place d'un cluster Nutanix en site de secours, migration et répartition des charges, configuration de la réplication.",
        details: "<h4>Contexte</h4><p>Mise en place d'un site de secours hyperconvergé Nutanix pour sécuriser la continuité d'activité d'un client, avec répartition d'une partie des charges de travail sur le site de repli en fonctionnement normal, et non uniquement en cas de sinistre.</p><h4>Matériel &amp; Licences</h4><ul><li>1 cluster Nutanix AHV dédié au site de secours</li><li>Liaison réseau dédiée entre le site de production et le site de secours</li><li>Licences Nutanix AOS/AHV et fonctionnalités de réplication (Protection Domains / Leap selon la version)</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Installation du cluster de secours :</strong> Foundation Nutanix sur les nœuds dédiés, formation du cluster AOS/AHV sur le site de repli.</li><li><strong>Configuration Prism Element :</strong> réseau virtuel, pools de stockage du cluster de secours, cohérents avec le site de production.</li><li><strong>Rattachement à Prism Central :</strong> intégration du nouveau cluster dans la supervision centralisée existante aux côtés du cluster de production.</li><li><strong>Migration initiale :</strong> migration avec Nutanix Move d'une première vague de VMs devant fonctionner nativement sur le site de secours.</li><li><strong>Répartition des charges :</strong> identification et bascule de certaines charges de travail non critiques vers le site de repli pour équilibrer l'utilisation des deux clusters en fonctionnement normal.</li><li><strong>Configuration de la réplication :</strong> mise en place des politiques de réplication (Protection Domains) entre le cluster de production et le cluster de secours, définition des RPO/RTO cibles.</li><li><strong>Tests de bascule :</strong> exercices de failover et failback, contrôle de la cohérence des données répliquées et validation du plan de reprise d'activité.</li></ol>"
      },
      en: {
        title: "Nutanix HCI Disaster Recovery Site Deployment",
        tags: ["Nutanix", "DRP", "Replication"],
        summary: "Deployment of a Nutanix DR site cluster, workload migration and distribution, and replication configuration.",
        details: "<h4>Context</h4><p>Deployment of a hyperconverged Nutanix disaster recovery (DR) site to secure a client's business continuity, with part of the workloads distributed to the DR site under normal operation rather than only in the event of a disaster.</p><h4>Hardware &amp; Licenses</h4><ul><li>1 Nutanix AHV cluster dedicated to the DR site</li><li>Dedicated network link between the production site and the DR site</li><li>Nutanix AOS/AHV licenses and replication features (Protection Domains / Leap depending on version)</li></ul><h4>Deployment Steps</h4><ol><li><strong>DR cluster installation:</strong> Nutanix Foundation on the dedicated nodes, AOS/AHV cluster formation on the DR site.</li><li><strong>Prism Element configuration:</strong> virtual network and storage pools for the DR cluster, kept consistent with the production site.</li><li><strong>Prism Central integration:</strong> the new cluster added to the existing centralized oversight alongside the production cluster.</li><li><strong>Initial migration:</strong> migration with Nutanix Move of a first wave of VMs meant to run natively on the DR site.</li><li><strong>Workload distribution:</strong> identification and relocation of certain non-critical workloads to the DR site to balance usage across both clusters under normal operation.</li><li><strong>Replication configuration:</strong> setup of replication policies (Protection Domains) between the production and DR clusters, with target RPO/RTO defined.</li><li><strong>Failover testing:</strong> failover and failback exercises, consistency checks on replicated data, and validation of the disaster recovery plan.</li></ol>"
      }
    },
    {
      fr: {
        title: "Mise à niveau d'une infrastructure informatique",
        tags: ["VMware", "Veeam"],
        summary: "Cluster VMware vSphere 2 noeuds avec stockage SAN HPE et sauvegarde Dell DataDomain.",
        details: "<h4>Contexte</h4><p>Modernisation d'une infrastructure physique vieillissante par la mise en place d'un cluster VMware vSphere et migration des serveurs physiques vers l'environnement virtualisé.</p><h4>Matériel &amp; Licences</h4><ul><li>2 serveurs pour le cluster VMware vCenter/ESXi</li><li>1 baie de stockage SAN HPE MSA1060</li><li>1 appliance de sauvegarde Dell DataDomain</li><li>Licences VMware vSphere/vCenter et Veeam Backup &amp; Replication</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Installation des hôtes ESXi :</strong> installation de l'hyperviseur VMware ESXi sur les 2 serveurs.</li><li><strong>Déploiement de vCenter Server :</strong> installation de vCenter, rattachement des hôtes ESXi et création du cluster.</li><li><strong>Configuration du stockage :</strong> raccordement de la baie HPE MSA1060 en SAN, création des datastores partagés entre les deux hôtes.</li><li><strong>Configuration réseau :</strong> mise en place des vSwitches/port groups pour les réseaux de gestion, production et stockage.</li><li><strong>Migration :</strong> migration des serveurs physiques vers l'infrastructure virtuelle avec VMware Converter (physical-to-virtual).</li><li><strong>Mise en place de la sauvegarde :</strong> installation et configuration de Veeam Backup &amp; Replication, intégration de l'appliance Dell DataDomain comme repository de déduplication.</li><li><strong>Tests :</strong> vérification du bon fonctionnement des VMs migrées et tests de restauration.</li></ol>"
      },
      en: {
        title: "IT Infrastructure Upgrade",
        tags: ["VMware", "Veeam"],
        summary: "2-node VMware vSphere cluster with HPE SAN storage and Dell DataDomain backup.",
        details: "<h4>Context</h4><p>Modernization of an aging physical infrastructure through the deployment of a VMware vSphere cluster and migration of physical servers into the virtualized environment.</p><h4>Hardware &amp; Licenses</h4><ul><li>2 servers for the VMware vCenter/ESXi cluster</li><li>1 HPE MSA1060 SAN storage array</li><li>1 Dell DataDomain backup appliance</li><li>VMware vSphere/vCenter and Veeam Backup &amp; Replication licenses</li></ul><h4>Deployment Steps</h4><ol><li><strong>ESXi host installation:</strong> installation of the VMware ESXi hypervisor on the 2 servers.</li><li><strong>vCenter Server deployment:</strong> installation of vCenter, adding the ESXi hosts and creating the cluster.</li><li><strong>Storage configuration:</strong> connecting the HPE MSA1060 array over SAN, creating shared datastores across both hosts.</li><li><strong>Network configuration:</strong> setup of vSwitches/port groups for the management, production and storage networks.</li><li><strong>Migration:</strong> migration of physical servers into the virtual infrastructure using VMware Converter (physical-to-virtual).</li><li><strong>Backup setup:</strong> installation and configuration of Veeam Backup &amp; Replication, integration of the Dell DataDomain appliance as a deduplication repository.</li><li><strong>Testing:</strong> verification that migrated VMs run correctly and restore testing.</li></ol>"
      }
    },
    {
      fr: {
        title: "Mise en place d'une infrastructure virtuelle",
        tags: ["VMware", "Veeam", "Fortinet", "Active Directory"],
        summary: "Cluster VMware 2 noeuds, sécurité Fortinet, création des serveurs virtuels dont l'AD.",
        details: "<h4>Contexte</h4><p>Déploiement complet d'une infrastructure virtuelle VMware pour un client ne disposant pas encore d'environnement virtualisé, incluant la création des premiers serveurs virtuels métiers.</p><h4>Matériel &amp; Licences</h4><ul><li>2 serveurs pour le cluster VMware vCenter/ESXi</li><li>1 baie de stockage SAN HPE MSA1060</li><li>1 switch niveau 2 et 1 pare-feu Fortinet</li><li>1 baie NAS Synology de sauvegarde</li><li>Licences VMware vSphere/vCenter, Windows Server (Active Directory) et Veeam Backup &amp; Replication</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Réseau et sécurité :</strong> installation du switch niveau 2 et du pare-feu Fortinet, segmentation des réseaux (gestion, production, stockage).</li><li><strong>Installation des hôtes ESXi :</strong> installation de VMware ESXi sur les 2 serveurs.</li><li><strong>Déploiement de vCenter :</strong> installation de vCenter Server, rattachement des hôtes et création du cluster.</li><li><strong>Configuration du stockage :</strong> connexion de la baie HPE MSA1060, création des datastores partagés.</li><li><strong>Création des serveurs virtuels :</strong> déploiement des premières VMs, dont un serveur Active Directory (contrôleur de domaine, DNS, GPO de base).</li><li><strong>Mise en place de la sauvegarde :</strong> installation de Veeam Backup &amp; Replication, ajout de la baie NAS Synology comme repository et création des jobs de sauvegarde.</li><li><strong>Tests :</strong> validation du domaine Active Directory et tests de restauration des VMs.</li></ol>"
      },
      en: {
        title: "Virtual Infrastructure Deployment",
        tags: ["VMware", "Veeam", "Fortinet", "Active Directory"],
        summary: "2-node VMware cluster, Fortinet security, creation of virtual servers including AD.",
        details: "<h4>Context</h4><p>Full deployment of a VMware virtual infrastructure for a client with no existing virtualized environment, including the creation of the first business-facing virtual servers.</p><h4>Hardware &amp; Licenses</h4><ul><li>2 servers for the VMware vCenter/ESXi cluster</li><li>1 HPE MSA1060 SAN storage array</li><li>1 Layer 2 switch and 1 Fortinet firewall</li><li>1 Synology NAS backup array</li><li>VMware vSphere/vCenter, Windows Server (Active Directory) and Veeam Backup &amp; Replication licenses</li></ul><h4>Deployment Steps</h4><ol><li><strong>Network and security:</strong> installation of the Layer 2 switch and Fortinet firewall, network segmentation (management, production, storage).</li><li><strong>ESXi host installation:</strong> installation of VMware ESXi on the 2 servers.</li><li><strong>vCenter deployment:</strong> installation of vCenter Server, adding the hosts and creating the cluster.</li><li><strong>Storage configuration:</strong> connecting the HPE MSA1060 array, creating shared datastores.</li><li><strong>Virtual server creation:</strong> deployment of the first VMs, including an Active Directory server (domain controller, DNS, baseline GPOs).</li><li><strong>Backup setup:</strong> installation of Veeam Backup &amp; Replication, adding the Synology NAS as a repository and creating backup jobs.</li><li><strong>Testing:</strong> validation of the Active Directory domain and VM restore testing.</li></ol>"
      }
    },
    {
      fr: {
        title: "Mise en place d'une infrastructure réseaux et systèmes",
        tags: ["VMware", "Veeam", "Fortinet"],
        summary: "Cluster VMware 2 noeuds, firewalls Palo Alto et Forti, sauvegardes locales et répliquées.",
        details: "<h4>Contexte</h4><p>Déploiement d'une infrastructure virtuelle VMware avec segmentation réseau avancée (Palo Alto sur le site principal, Fortinet sur le site de réplication) et stratégie de sauvegarde locale + réplication distante.</p><h4>Matériel &amp; Licences</h4><ul><li>2 serveurs pour le cluster VMware vCenter/ESXi</li><li>1 baie de stockage SAN HPE MSA1060</li><li>1 switch niveau 2, 1 pare-feu Palo Alto (site principal), 1 pare-feu Fortinet (site de réplication)</li><li>1 baie NAS Synology (réplication)</li><li>Licences VMware vSphere/vCenter et Veeam Backup &amp; Replication</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Réseau et sécurité :</strong> installation du switch niveau 2, configuration du pare-feu Palo Alto sur le site principal et du pare-feu Fortinet sur le site de réplication.</li><li><strong>Installation des hôtes ESXi et vCenter :</strong> installation d'ESXi sur les 2 serveurs, déploiement de vCenter et création du cluster.</li><li><strong>Configuration du stockage :</strong> connexion de la baie HPE MSA1060, création des datastores.</li><li><strong>Création des serveurs virtuels :</strong> déploiement des VMs, dont le serveur Active Directory et le serveur de messagerie.</li><li><strong>Sauvegarde locale :</strong> installation de Veeam Backup &amp; Replication, création des jobs de sauvegarde locaux sur le site principal.</li><li><strong>Réplication distante :</strong> configuration de la réplication des sauvegardes vers le NAS Synology situé sur le site de réplication.</li><li><strong>Tests :</strong> tests des règles de sécurité entre sites et validation de la chaîne de sauvegarde/réplication.</li></ol>"
      },
      en: {
        title: "Network &amp; Systems Infrastructure Deployment",
        tags: ["VMware", "Veeam", "Fortinet"],
        summary: "2-node VMware cluster, Palo Alto and Forti firewalls, local backups with off-site replication.",
        details: "<h4>Context</h4><p>Deployment of a VMware virtual infrastructure with advanced network segmentation (Palo Alto on the main site, Fortinet on the replication site) and a local-backup-plus-remote-replication strategy.</p><h4>Hardware &amp; Licenses</h4><ul><li>2 servers for the VMware vCenter/ESXi cluster</li><li>1 HPE MSA1060 SAN storage array</li><li>1 Layer 2 switch, 1 Palo Alto firewall (main site), 1 Fortinet firewall (replication site)</li><li>1 Synology NAS array (replication)</li><li>VMware vSphere/vCenter and Veeam Backup &amp; Replication licenses</li></ul><h4>Deployment Steps</h4><ol><li><strong>Network and security:</strong> installation of the Layer 2 switch, configuration of the Palo Alto firewall on the main site and the Fortinet firewall on the replication site.</li><li><strong>ESXi and vCenter installation:</strong> ESXi installed on the 2 servers, vCenter deployed and the cluster created.</li><li><strong>Storage configuration:</strong> connecting the HPE MSA1060 array, creating datastores.</li><li><strong>Virtual server creation:</strong> deployment of the VMs, including the Active Directory server and the mail server.</li><li><strong>Local backup:</strong> installation of Veeam Backup &amp; Replication, local backup jobs created on the main site.</li><li><strong>Remote replication:</strong> configuration of backup replication to the Synology NAS located on the replication site.</li><li><strong>Testing:</strong> testing of inter-site security rules and validation of the backup/replication chain.</li></ol>"
      }
    },
    {
      fr: {
        title: "Refonte d'une infrastructure informatique (VMware)",
        tags: ["VMware", "Veeam", "Fortinet"],
        summary: "Cluster VMware réparti sur deux sites, 5 agences reliées, sauvegarde et réplication centralisées.",
        details: "<h4>Contexte</h4><p>Refonte complète de l'infrastructure IT d'un client multi-sites, avec un cluster VMware réparti entre un site de production et un site de réplication, et rattachement de 5 agences distantes à cette infrastructure centralisée.</p><h4>Matériel &amp; Licences</h4><ul><li>2 serveurs sur le site de production, 1 serveur sur le site de réplication (cluster VMware vCenter/ESXi)</li><li>1 baie de stockage SAN HPE MSA1060</li><li>1 switch niveau 2 et 2 pare-feux Fortinet sur le site de production ; 1 pare-feu Fortinet et 1 switch sur le site de réplication et sur chacune des 5 agences</li><li>1 baie NAS Synology (site de secours)</li><li>Licences VMware vSphere/vCenter et Veeam Backup &amp; Replication</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Réseau et sécurité :</strong> déploiement des switches et pare-feux Fortinet sur le site de production, le site de réplication et les 5 agences ; mise en place des liaisons inter-sites.</li><li><strong>Installation du cluster VMware :</strong> installation d'ESXi sur les 2 serveurs du site de production, déploiement de vCenter et création du cluster.</li><li><strong>Configuration du stockage :</strong> connexion de la baie HPE MSA1060, création des datastores partagés.</li><li><strong>Serveur de réplication :</strong> installation d'un hôte ESXi supplémentaire sur le site de réplication et rattachement à vCenter.</li><li><strong>Création des serveurs virtuels :</strong> déploiement des VMs, dont le serveur Active Directory et le serveur de messagerie, accessibles depuis les 5 agences.</li><li><strong>Sauvegarde et réplication :</strong> installation de Veeam Backup &amp; Replication, sauvegardes sur le NAS Synology du site de secours et réplication des VMs critiques vers le site de réplication.</li><li><strong>Tests :</strong> validation de l'accès depuis les agences, tests de bascule et de restauration.</li></ol>"
      },
      en: {
        title: "IT Infrastructure Overhaul (VMware)",
        tags: ["VMware", "Veeam", "Fortinet"],
        summary: "VMware cluster spanning two sites, 5 connected branch offices, centralized backup and replication.",
        details: "<h4>Context</h4><p>Complete overhaul of the IT infrastructure of a multi-site client, with a VMware cluster spread across a production site and a replication site, and 5 remote branch offices connected to this centralized infrastructure.</p><h4>Hardware &amp; Licenses</h4><ul><li>2 servers on the production site, 1 server on the replication site (VMware vCenter/ESXi cluster)</li><li>1 HPE MSA1060 SAN storage array</li><li>1 Layer 2 switch and 2 Fortinet firewalls on the production site; 1 Fortinet firewall and 1 switch on the replication site and each of the 5 branch offices</li><li>1 Synology NAS array (DR site)</li><li>VMware vSphere/vCenter and Veeam Backup &amp; Replication licenses</li></ul><h4>Deployment Steps</h4><ol><li><strong>Network and security:</strong> deployment of switches and Fortinet firewalls on the production site, the replication site and the 5 branch offices; setup of inter-site links.</li><li><strong>VMware cluster installation:</strong> ESXi installed on the 2 production-site servers, vCenter deployed and the cluster created.</li><li><strong>Storage configuration:</strong> connecting the HPE MSA1060 array, creating shared datastores.</li><li><strong>Replication server:</strong> an additional ESXi host installed on the replication site and added to vCenter.</li><li><strong>Virtual server creation:</strong> deployment of the VMs, including the Active Directory server and the mail server, accessible from the 5 branch offices.</li><li><strong>Backup and replication:</strong> installation of Veeam Backup &amp; Replication, backups stored on the DR site's Synology NAS and replication of critical VMs to the replication site.</li><li><strong>Testing:</strong> validation of access from the branch offices, failover and restore testing.</li></ol>"
      }
    },
    {
      fr: {
        title: "Déploiement d'une infrastructure VMware avec sauvegarde Microsoft 365",
        tags: ["VMware", "Veeam", "Active Directory"],
        summary: "Cluster VMware sur 2 serveurs HPE et baie de stockage, VBR, VB365, Active Directory et serveurs métiers.",
        details: "<h4>Contexte</h4><p>Déploiement d'une infrastructure VMware complète pour un client, incluant la protection des données on-premise (VBR) et du tenant Microsoft 365 (VB365), ainsi que le déploiement des serveurs applicatifs métiers.</p><h4>Matériel &amp; Licences</h4><ul><li>2 serveurs HPE pour le cluster VMware vCenter/ESXi</li><li>1 baie de stockage SAN pour les datastores partagés</li><li>Licences VMware vSphere/vCenter, Veeam Backup &amp; Replication (VBR) et Veeam Backup for Microsoft 365 (VB365)</li><li>Licence Windows Server (Active Directory)</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Installation des hôtes ESXi :</strong> installation de VMware ESXi sur les 2 serveurs HPE.</li><li><strong>Déploiement de vCenter :</strong> installation de vCenter Server, rattachement des hôtes ESXi et création du cluster.</li><li><strong>Configuration du stockage :</strong> connexion de la baie de stockage, création des datastores partagés entre les deux hôtes.</li><li><strong>Configuration réseau :</strong> mise en place des vSwitches et port groups pour les réseaux de gestion, production et stockage.</li><li><strong>Déploiement d'Active Directory :</strong> création du serveur Active Directory (contrôleur de domaine, DNS, GPO de base).</li><li><strong>Déploiement des serveurs métiers :</strong> création et configuration des autres serveurs virtuels nécessaires aux applications métiers du client.</li><li><strong>Installation et configuration de VBR :</strong> déploiement du serveur Veeam Backup &amp; Replication, ajout de l'infrastructure vCenter et des repositories, création des jobs de sauvegarde des VMs.</li><li><strong>Installation et configuration de VB365 :</strong> déploiement de Veeam Backup for Microsoft 365, connexion au tenant M365 du client, création des jobs de sauvegarde (Exchange Online, SharePoint, OneDrive, Teams).</li><li><strong>Tests :</strong> tests de restauration des VMs (VBR) et des données M365 (VB365), validation globale de l'infrastructure.</li></ol>"
      },
      en: {
        title: "VMware Infrastructure Deployment with Microsoft 365 Backup",
        tags: ["VMware", "Veeam", "Active Directory"],
        summary: "VMware cluster on 2 HPE servers with a storage array, VBR, VB365, Active Directory and business application servers.",
        details: "<h4>Context</h4><p>Deployment of a full VMware infrastructure for a client, including protection of on-premise data (VBR) and of the Microsoft 365 tenant (VB365), as well as deployment of the business application servers.</p><h4>Hardware &amp; Licenses</h4><ul><li>2 HPE servers for the VMware vCenter/ESXi cluster</li><li>1 SAN storage array for shared datastores</li><li>VMware vSphere/vCenter, Veeam Backup &amp; Replication (VBR) and Veeam Backup for Microsoft 365 (VB365) licenses</li><li>Windows Server license (Active Directory)</li></ul><h4>Deployment Steps</h4><ol><li><strong>ESXi host installation:</strong> installation of VMware ESXi on the 2 HPE servers.</li><li><strong>vCenter deployment:</strong> installation of vCenter Server, adding the ESXi hosts and creating the cluster.</li><li><strong>Storage configuration:</strong> connecting the storage array, creating shared datastores across both hosts.</li><li><strong>Network configuration:</strong> setup of vSwitches and port groups for the management, production and storage networks.</li><li><strong>Active Directory deployment:</strong> creation of the Active Directory server (domain controller, DNS, baseline GPOs).</li><li><strong>Business server deployment:</strong> creation and configuration of the other virtual servers required for the client's business applications.</li><li><strong>VBR installation and configuration:</strong> deployment of the Veeam Backup &amp; Replication server, adding the vCenter infrastructure and repositories, creation of VM backup jobs.</li><li><strong>VB365 installation and configuration:</strong> deployment of Veeam Backup for Microsoft 365, connection to the client's M365 tenant, creation of backup jobs (Exchange Online, SharePoint, OneDrive, Teams).</li><li><strong>Testing:</strong> restore testing for VMs (VBR) and M365 data (VB365), overall infrastructure validation.</li></ol>"
      }
    },
    {
      fr: {
        title: "Mise en place d'une infrastructure Proxmox VE",
        tags: ["Proxmox", "Cluster"],
        summary: "Déploiement d'un cluster Proxmox VE avec configuration réseau, stockage et haute disponibilité.",
        details: "<h4>Contexte</h4><p>Mise en place d'une nouvelle infrastructure de virtualisation open source pour un client, avec un cluster Proxmox VE afin de garantir la haute disponibilité des machines virtuelles à moindre coût de licence.</p><h4>Matériel &amp; Licences</h4><ul><li>3 serveurs pour le cluster Proxmox VE</li><li>1 baie de stockage partagé (NFS/iSCSI) ou solution de stockage distribué Ceph selon le besoin</li><li>2 switches niveau 2 dédiés aux réseaux de gestion et de stockage</li><li>Abonnement de support Proxmox (dépôt Enterprise) selon le niveau de criticité</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Installation des nœuds :</strong> installation de Proxmox VE sur les 3 serveurs, configuration du réseau de gestion sur chaque nœud.</li><li><strong>Création du cluster :</strong> initialisation du cluster Proxmox depuis le premier nœud et rattachement des deux autres nœuds, vérification du quorum.</li><li><strong>Configuration du stockage :</strong> ajout du stockage partagé (NFS/iSCSI ou Ceph) accessible par l'ensemble des nœuds du cluster.</li><li><strong>Configuration réseau :</strong> mise en place des bridges réseau et VLANs pour séparer les flux de gestion, de production et de stockage.</li><li><strong>Configuration de la haute disponibilité (HA) :</strong> création des groupes HA, définition des règles de priorité et des politiques de fencing pour le basculement automatique des VMs.</li><li><strong>Création des machines virtuelles :</strong> déploiement des premières VMs et configuration de leurs ressources (CPU, RAM, disques).</li><li><strong>Tests :</strong> tests de migration à chaud entre nœuds et de bascule HA en cas de panne d'un nœud.</li></ol>"
      },
      en: {
        title: "Proxmox VE Infrastructure Deployment",
        tags: ["Proxmox", "Cluster"],
        summary: "Deployment of a Proxmox VE cluster with network, storage and high-availability configuration.",
        details: "<h4>Context</h4><p>Deployment of a new open-source virtualization infrastructure for a client, with a Proxmox VE cluster to ensure high availability of virtual machines at a lower licensing cost.</p><h4>Hardware &amp; Licenses</h4><ul><li>3 servers for the Proxmox VE cluster</li><li>1 shared storage array (NFS/iSCSI) or a Ceph distributed storage solution depending on requirements</li><li>2 Layer 2 switches dedicated to the management and storage networks</li><li>Proxmox support subscription (Enterprise repository) depending on the criticality level</li></ul><h4>Deployment Steps</h4><ol><li><strong>Node installation:</strong> Proxmox VE installed on the 3 servers, management network configured on each node.</li><li><strong>Cluster creation:</strong> Proxmox cluster initialized from the first node, the other two nodes joined, and quorum verified.</li><li><strong>Storage configuration:</strong> shared storage (NFS/iSCSI or Ceph) added and made accessible to all cluster nodes.</li><li><strong>Network configuration:</strong> setup of network bridges and VLANs to separate management, production and storage traffic.</li><li><strong>High availability (HA) configuration:</strong> HA groups created, priority rules and fencing policies defined for automatic VM failover.</li><li><strong>Virtual machine creation:</strong> deployment of the first VMs and configuration of their resources (CPU, RAM, disks).</li><li><strong>Testing:</strong> live migration testing between nodes and HA failover testing in the event of a node failure.</li></ol>"
      }
    },
    {
      fr: {
        title: "Migration d'une infrastructure VMware vers Proxmox VE",
        tags: ["Proxmox", "VMware", "Migration"],
        summary: "Migration complète d'un environnement VMware vers un cluster Proxmox VE.",
        details: "<h4>Contexte</h4><p>Accompagnement d'un client dans sa migration d'une infrastructure VMware vers Proxmox VE, dans une logique de réduction des coûts de licence et de reprise en main de l'infrastructure.</p><h4>Matériel &amp; Licences</h4><ul><li>Nouveaux serveurs (ou réutilisation des serveurs existants) pour le cluster Proxmox VE</li><li>Réutilisation ou adaptation de la baie de stockage SAN existante</li><li>Outils de migration (Proxmox Import Wizard / conversion d'images disque)</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Audit de l'existant :</strong> inventaire des VMs VMware, de leurs ressources allouées et de leurs dépendances applicatives.</li><li><strong>Installation des nœuds Proxmox :</strong> installation de Proxmox VE sur les serveurs cibles et création du cluster.</li><li><strong>Configuration réseau et stockage :</strong> mise en place des bridges réseau et rattachement du stockage partagé, en cohérence avec la configuration VMware existante.</li><li><strong>Migration des machines virtuelles :</strong> export/conversion des VMs depuis l'environnement VMware (vCenter/ESXi) et import dans Proxmox VE, avec adaptation des pilotes et des disques virtuels.</li><li><strong>Configuration de la haute disponibilité :</strong> mise en place des groupes HA sur le nouveau cluster Proxmox pour retrouver le niveau de disponibilité de l'ancienne infrastructure.</li><li><strong>Bascule progressive :</strong> migration des VMs par vagues successives afin de limiter l'impact sur la production, avec validation fonctionnelle après chaque vague.</li><li><strong>Décommissionnement :</strong> arrêt et démantèlement de l'ancienne infrastructure VMware une fois la migration validée.</li><li><strong>Tests :</strong> tests de bon fonctionnement des applications migrées et de bascule HA sur le nouveau cluster.</li></ol>"
      },
      en: {
        title: "VMware-to-Proxmox VE Migration",
        tags: ["Proxmox", "VMware", "Migration"],
        summary: "Full migration of a VMware environment to a Proxmox VE cluster.",
        details: "<h4>Context</h4><p>Supporting a client through the migration of a VMware infrastructure to Proxmox VE, driven by license cost reduction and regaining full control over the infrastructure.</p><h4>Hardware &amp; Licenses</h4><ul><li>New servers (or reuse of existing servers) for the Proxmox VE cluster</li><li>Reuse or adaptation of the existing SAN storage array</li><li>Migration tooling (Proxmox Import Wizard / disk image conversion)</li></ul><h4>Deployment Steps</h4><ol><li><strong>Existing environment audit:</strong> inventory of the VMware VMs, their allocated resources and application dependencies.</li><li><strong>Proxmox node installation:</strong> Proxmox VE installed on the target servers and the cluster created.</li><li><strong>Network and storage configuration:</strong> network bridges set up and shared storage connected, kept consistent with the existing VMware configuration.</li><li><strong>Virtual machine migration:</strong> VMs exported/converted from the VMware environment (vCenter/ESXi) and imported into Proxmox VE, with driver and virtual disk adaptation.</li><li><strong>High availability configuration:</strong> HA groups set up on the new Proxmox cluster to match the availability level of the legacy infrastructure.</li><li><strong>Phased cutover:</strong> VMs migrated in successive waves to limit impact on production, with functional validation after each wave.</li><li><strong>Decommissioning:</strong> shutdown and dismantling of the legacy VMware infrastructure once the migration was validated.</li><li><strong>Testing:</strong> testing that migrated applications work correctly and HA failover testing on the new cluster.</li></ol>"
      }
    },
    {
      fr: {
        title: "Refonte d'une infrastructure informatique (Hyper-V)",
        tags: ["Hyper-V", "Active Directory"],
        summary: "Cluster Windows Server Hyper-V 2 noeuds avec stockage SAN et sécurité Fortinet.",
        details: "<h4>Contexte</h4><p>Refonte de l'infrastructure d'un client sous environnement Microsoft, avec le déploiement d'un cluster de basculement Hyper-V pour assurer la haute disponibilité des serveurs virtuels.</p><h4>Matériel &amp; Licences</h4><ul><li>2 serveurs Windows Server pour le cluster Hyper-V</li><li>1 baie de stockage SAN HPE MSA1060</li><li>2 switches niveau 2 et 1 pare-feu Fortinet</li><li>Licences Windows Server Datacenter (rôle Hyper-V et fonctionnalité Clustering de basculement)</li></ul><h4>Étapes de déploiement</h4><ol><li><strong>Réseau et sécurité :</strong> installation des deux switches niveau 2 et du pare-feu Fortinet.</li><li><strong>Installation des nœuds :</strong> installation de Windows Server et activation du rôle Hyper-V sur les deux serveurs.</li><li><strong>Configuration du stockage partagé :</strong> connexion de la baie HPE MSA1060 en SAN, configuration d'un volume partagé de cluster (CSV) accessible par les deux nœuds.</li><li><strong>Création du cluster de basculement :</strong> activation de la fonctionnalité Clustering de basculement, validation de la configuration et formation du cluster Hyper-V à deux nœuds.</li><li><strong>Configuration des réseaux virtuels :</strong> mise en place des commutateurs virtuels Hyper-V pour les réseaux de gestion, de production et de Live Migration.</li><li><strong>Création des serveurs virtuels :</strong> déploiement des VMs, dont le serveur Active Directory, configurées en haute disponibilité sur le cluster.</li><li><strong>Tests :</strong> tests de Live Migration entre les deux nœuds et de bascule automatique en cas de panne.</li></ol>"
      },
      en: {
        title: "IT Infrastructure Overhaul (Hyper-V)",
        tags: ["Hyper-V", "Active Directory"],
        summary: "2-node Windows Server Hyper-V cluster with SAN storage and Fortinet security.",
        details: "<h4>Context</h4><p>Overhaul of a client's infrastructure in a Microsoft-centric environment, with the deployment of a Hyper-V failover cluster to ensure high availability of the virtual servers.</p><h4>Hardware &amp; Licenses</h4><ul><li>2 Windows Server machines for the Hyper-V cluster</li><li>1 HPE MSA1060 SAN storage array</li><li>2 Layer 2 switches and 1 Fortinet firewall</li><li>Windows Server Datacenter licenses (Hyper-V role and Failover Clustering feature)</li></ul><h4>Deployment Steps</h4><ol><li><strong>Network and security:</strong> installation of the two Layer 2 switches and the Fortinet firewall.</li><li><strong>Node installation:</strong> Windows Server installed and the Hyper-V role enabled on both servers.</li><li><strong>Shared storage configuration:</strong> connecting the HPE MSA1060 array over SAN, configuring a Cluster Shared Volume (CSV) accessible from both nodes.</li><li><strong>Failover cluster creation:</strong> enabling the Failover Clustering feature, running cluster validation, and forming the 2-node Hyper-V cluster.</li><li><strong>Virtual network configuration:</strong> setup of Hyper-V virtual switches for the management, production and Live Migration networks.</li><li><strong>Virtual server creation:</strong> deployment of the VMs, including the Active Directory server, configured for high availability on the cluster.</li><li><strong>Testing:</strong> Live Migration testing between the two nodes and automatic failover testing in the event of a node failure.</li></ol>"
      }
    },
    {
      fr: {
        title: "Audit d'un parc informatique",
        tags: ["Audit", "Active Directory"],
        summary: "Inventaire matériel/logiciel et audit réseaux, systèmes et Active Directory.",
        details: "<h4>Contexte</h4><p>Réalisation d'un audit complet du parc informatique d'un client afin d'établir un état des lieux précis et de proposer un plan d'action technique priorisé.</p><h4>Périmètre de la mission</h4><ul><li>Inventaire matériel et logiciel (postes de travail, serveurs, équipements réseau)</li><li>Audit de l'infrastructure réseau et des systèmes serveurs</li><li>Audit de l'annuaire Active Directory</li></ul><h4>Étapes de la mission</h4><ol><li><strong>Cadrage :</strong> recueil des besoins et du périmètre exact de l'audit avec le client.</li><li><strong>Inventaire :</strong> recensement du matériel et des logiciels installés sur l'ensemble du parc.</li><li><strong>Audit réseau et systèmes :</strong> analyse de l'architecture réseau, des configurations serveurs et des éventuelles vulnérabilités.</li><li><strong>Audit Active Directory :</strong> analyse de la structure de l'annuaire, des GPO, des comptes et des droits.</li><li><strong>Rédaction du rapport :</strong> formalisation des constats, des risques identifiés et des recommandations.</li><li><strong>Proposition technique :</strong> élaboration d'un plan d'actions de remédiation priorisé, présenté au client.</li></ol>"
      },
      en: {
        title: "IT Estate Audit",
        tags: ["Audit", "Active Directory"],
        summary: "Hardware/software inventory and audit of networks, systems and Active Directory.",
        details: "<h4>Context</h4><p>Carrying out a full audit of a client's IT estate to establish an accurate baseline and propose a prioritized technical action plan.</p><h4>Scope</h4><ul><li>Hardware and software inventory (workstations, servers, network equipment)</li><li>Audit of the network infrastructure and server systems</li><li>Audit of the Active Directory</li></ul><h4>Mission Steps</h4><ol><li><strong>Scoping:</strong> gathering requirements and defining the exact scope of the audit with the client.</li><li><strong>Inventory:</strong> cataloguing hardware and installed software across the entire estate.</li><li><strong>Network and systems audit:</strong> analysis of the network architecture, server configurations and potential vulnerabilities.</li><li><strong>Active Directory audit:</strong> analysis of the directory structure, GPOs, accounts and permissions.</li><li><strong>Report drafting:</strong> formalization of findings, identified risks and recommendations.</li><li><strong>Technical proposal:</strong> a prioritized remediation action plan drawn up and presented to the client.</li></ol>"
      }
    },
    {
      fr: {
        title: "Audit d'un domaine Active Directory",
        tags: ["Audit", "Active Directory"],
        summary: "Audit complet du domaine Active Directory avec plan de remédiation.",
        details: "<h4>Contexte</h4><p>Audit approfondi d'un domaine Active Directory afin d'en évaluer la santé, la sécurité et la conformité aux bonnes pratiques, avant mise en place des actions correctives.</p><h4>Périmètre de la mission</h4><ul><li>Structure de l'annuaire (unités d'organisation, groupes, comptes)</li><li>Stratégies de groupe (GPO) et délégations</li><li>Contrôleurs de domaine et réplication</li></ul><h4>Étapes de la mission</h4><ol><li><strong>Collecte des informations :</strong> extraction des données de l'annuaire (comptes, groupes, GPO, droits délégués).</li><li><strong>Analyse :</strong> identification des anomalies, des comptes obsolètes, des GPO redondantes ou mal configurées et des risques de sécurité.</li><li><strong>Rédaction du rapport d'audit :</strong> synthèse des constats et hiérarchisation des risques.</li><li><strong>Mise en place des actions de remédiation :</strong> corrections appliquées en accord avec le client (nettoyage, durcissement, réorganisation).</li></ol>"
      },
      en: {
        title: "Active Directory Domain Audit",
        tags: ["Audit", "Active Directory"],
        summary: "Full Active Directory domain audit with a remediation plan.",
        details: "<h4>Context</h4><p>In-depth audit of an Active Directory domain to assess its health, security and compliance with best practices, ahead of implementing corrective actions.</p><h4>Scope</h4><ul><li>Directory structure (organizational units, groups, accounts)</li><li>Group Policies (GPOs) and delegations</li><li>Domain controllers and replication</li></ul><h4>Mission Steps</h4><ol><li><strong>Information gathering:</strong> extraction of directory data (accounts, groups, GPOs, delegated rights).</li><li><strong>Analysis:</strong> identification of anomalies, stale accounts, redundant or misconfigured GPOs, and security risks.</li><li><strong>Audit report drafting:</strong> summary of findings and risk prioritization.</li><li><strong>Remediation actions:</strong> corrections applied in agreement with the client (cleanup, hardening, reorganization).</li></ol>"
      }
    },
    {
      fr: {
        title: "Remédiation suite à un audit de pentesting",
        tags: ["Sécurité", "Active Directory", "GPO"],
        summary: "Exploitation d'un rapport de pentest : nettoyage de l'annuaire, GPO et upgrade des contrôleurs.",
        details: "<h4>Contexte</h4><p>Mise en œuvre des actions correctives suite à un audit de pentesting ayant révélé des faiblesses sur l'annuaire Active Directory et les contrôleurs de domaine.</p><h4>Périmètre de la mission</h4><ul><li>Exploitation du rapport de pentest</li><li>Nettoyage de l'annuaire Active Directory</li><li>Mise en place et révision des GPO</li><li>Upgrade des contrôleurs de domaine</li></ul><h4>Étapes de la mission</h4><ol><li><strong>Analyse du rapport de pentest :</strong> priorisation des vulnérabilités à corriger en fonction de leur criticité.</li><li><strong>Nettoyage de l'annuaire :</strong> suppression des comptes et objets obsolètes, correction des droits excessifs.</li><li><strong>Révision des GPO :</strong> mise en place de nouvelles stratégies de groupe et correction des GPO existantes selon les recommandations du pentest.</li><li><strong>Upgrade des contrôleurs de domaine :</strong> migration des contrôleurs de domaine vers Windows Server 2022.</li><li><strong>Validation :</strong> vérification du bon fonctionnement du domaine après remédiation.</li></ol>"
      },
      en: {
        title: "Remediation Following a Pentest Audit",
        tags: ["Security", "Active Directory", "GPO"],
        summary: "Implementation of pentest findings: directory cleanup, GPOs, and controller upgrades.",
        details: "<h4>Context</h4><p>Implementation of corrective actions following a penetration testing audit that revealed weaknesses in the Active Directory and domain controllers.</p><h4>Scope</h4><ul><li>Implementation of the pentest report's findings</li><li>Active Directory cleanup</li><li>GPO deployment and review</li><li>Domain controller upgrade</li></ul><h4>Mission Steps</h4><ol><li><strong>Pentest report analysis:</strong> vulnerabilities prioritized for remediation based on their criticality.</li><li><strong>Directory cleanup:</strong> removal of stale accounts and objects, correction of excessive permissions.</li><li><strong>GPO review:</strong> new Group Policies deployed and existing GPOs corrected in line with the pentest recommendations.</li><li><strong>Domain controller upgrade:</strong> domain controllers migrated to Windows Server 2022.</li><li><strong>Validation:</strong> verification that the domain functions correctly after remediation.</li></ol>"
      }
    },
    {
      fr: {
        title: "Audit d'une infrastructure VMware",
        tags: ["Audit", "VMware"],
        summary: "Audit complet d'une infrastructure VMware avec plan de remédiation.",
        details: "<h4>Contexte</h4><p>Audit d'une infrastructure VMware existante afin d'évaluer sa configuration, ses performances et sa sécurité, et de proposer des actions d'amélioration.</p><h4>Périmètre de la mission</h4><ul><li>Configuration du cluster vCenter/ESXi</li><li>Configuration du stockage et du réseau virtuel</li><li>Politiques de sauvegarde existantes</li></ul><h4>Étapes de la mission</h4><ol><li><strong>Collecte des informations :</strong> analyse de la configuration des hôtes ESXi, du cluster et de vCenter.</li><li><strong>Analyse du stockage et du réseau :</strong> vérification du dimensionnement des datastores, de la configuration des vSwitches et de la haute disponibilité (HA/DRS).</li><li><strong>Rédaction du rapport d'audit :</strong> synthèse des constats et des risques identifiés (configuration, performance, sécurité).</li><li><strong>Mise en place des actions de remédiation :</strong> corrections appliquées en accord avec le client.</li></ol>"
      },
      en: {
        title: "VMware Infrastructure Audit",
        tags: ["Audit", "VMware"],
        summary: "Full VMware infrastructure audit with a remediation plan.",
        details: "<h4>Context</h4><p>Audit of an existing VMware infrastructure to assess its configuration, performance and security, and propose improvement actions.</p><h4>Scope</h4><ul><li>vCenter/ESXi cluster configuration</li><li>Storage and virtual network configuration</li><li>Existing backup policies</li></ul><h4>Mission Steps</h4><ol><li><strong>Information gathering:</strong> analysis of the ESXi host, cluster and vCenter configuration.</li><li><strong>Storage and network analysis:</strong> review of datastore sizing, vSwitch configuration and high availability (HA/DRS).</li><li><strong>Audit report drafting:</strong> summary of findings and identified risks (configuration, performance, security).</li><li><strong>Remediation actions:</strong> corrections applied in agreement with the client.</li></ol>"
      }
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

/* ===================== RENDU : TILES (competences) ===================== */
function renderTiles(containerId, sectionKey, lang) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = contentData[sectionKey] || [];
  const btnLabel = lang === 'en' ? 'See more' : 'Voir plus';

  el.innerHTML = list.map(function (item, i) {
    const t = getLocalized(item, lang);
    const subtitle = t.subtitle ? '<p class="tile-subtitle">' + t.subtitle + '</p>' : '';
    return (
      '<div class="tile-card">' +
        '<div class="tile-head">' +
          '<h3>' + t.title + '</h3>' +
          '<button class="btn-more" onclick="openInfoModal(\'' + sectionKey + '\', ' + i + ')">' + btnLabel + ' &rarr;</button>' +
        '</div>' +
        subtitle +
      '</div>'
    );
  }).join('');
}

/* ===================== RENDU : LISTE (certifications) ===================== */
function renderCertList(containerId, sectionKey, lang) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const list = contentData[sectionKey] || [];
  const btnLabel = lang === 'en' ? 'Details' : 'Détails';

  el.innerHTML = list.map(function (item, i) {
    const t = getLocalized(item, lang);
    return (
      '<li class="cert-plain-item">' +
        '<span class="cert-plain-name">' + t.title + '</span>' +
        '<button class="btn-cert-details" onclick="openInfoModal(\'' + sectionKey + '\', ' + i + ')">' + btnLabel + '</button>' +
      '</li>'
    );
  }).join('');
}

/* ===================== MODALE GENERIQUE ===================== */
function openInfoModal(section, index) {
  const item = contentData[section] && contentData[section][index];
  if (!item) return;
  const t = getLocalized(item, currentLang);

  document.getElementById('modal-title').innerHTML = t.title;

  const tagsHtml = (t.tags || []).map(function (tag) { return '<span class="tag">' + tag + '</span>'; }).join('');
  const tagsEl = document.getElementById('modal-tags');
  tagsEl.innerHTML = tagsHtml;
  tagsEl.style.display = tagsHtml ? 'flex' : 'none';

  document.getElementById('modal-details').innerHTML = t.details;
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
  renderTiles('skills-grid', 'skills', lang);
  renderCertList('certifications-list', 'certifications', lang);
}

window.addEventListener('DOMContentLoaded', function () {
  const savedLang = localStorage.getItem('portfolio-lang') || 'fr';
  setLang(savedLang);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeModal();
});