const jobs = [
  {
    role: 'Lead Software Developer',
    company: 'IQVIA (M&H Informatics (BD) Ltd) | (formerly Quintiles and IMS Health)',
    period: 'July 2021 - present',
    url: 'https://www.iqvia.com ',
    description:
      'Main responsibilities include requirement analysis, application development and regular communication with onshore team along with the stakeholders.',
    highlights: [
      'Work as a lead developer in product engineering team to support large volume data processing and data analytics applications based on complex business logics, validation rules as well as multileveled bridging methods.', 
      'Understanding of technical requirements, identify constraints, gap analysis, development scopes, effort estimations and documentation.',
      'Closely work with application architect and development team to review and finalize any system level changes.',
      'Evaluate & choose the appropriate tools, frameworks, languages, and methodologies for project development.',
      'Ensure the scalability, security, reliability, and sustainability of the data analytics solutions.',
      'Write clean, efficient, and well-documented code that follows industry standards and conventions.',
      'Perform unit testing, integration testing, oversee testing process of QA team and perform code reviews to ensure the quality and functionality of software solutions.', 
      'Identify any automation scope to reduce manual intervention & efforts.',
      'Platform migration and any enhancement scope of existing applications.',
      'Legacy system upgradation to meet new requirements with minimal overhead.',
      'Works at all layers of the application stack including front-end user interface and backend development.',
      'Complex programming skills in C#, .NET Core, Node.js, Angular, JavaScript along with DB skills in MongoDB.',
      'Use Git for version control, Harvest for code migration.',
      'Use JIRA for project tracking and Confluence for documentation.',
      'Provides peer support, helps upskilling team members and helps on-boarding new joiners.'
    ],
  },
  {
    role: 'Senior Application Development Specialist',
    company: 'IQVIA (M&H Informatics (BD) Ltd) | (formerly Quintiles and IMS Health)',
    period: 'December 2016 - June 2021',
    url: 'https://www.iqvia.com ',
    description:
      'Main responsibilities include requirement analysis, application development and regular communication with onshore team along with the stakeholders.',
    highlights: [
      'Project specific requirement analysis, communication with team lead and project manager.',
      'Development scope analysis, identify and suggest necessary development tools &amp; environments, task break down and time estimation with team members.',
      'Define application architectures, database structures and user interface layout.',
      'Participate on essential RnD tasks to integrate new technologies as per requirement.',
      'Web application development using Angular, MongoDB, NodeJS, .NET Core, Web API, Highchart, Aggrid, etc.',
      'Participate on product designing and coding based on the technical specification.',
      'Codebase deployment on development, staging and production servers.',
      'Troubleshooting QA reported issues and implementing appropriate fixes.',
      'Code refactoring and optimization.',
      'Follow standard methodologies of project life cycle and code convention.',
      'Version management using Git, TFS and build management using RepliWeb.',
      'Perform cross browser compatibility check and basic testing.',
      'Participate on training programs regarding cutting edge and advance technologies.'
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'The Jaxara It Ltd',
    period: 'April 2015 - November 2016',
    url: 'https://www.linkedin.com/company/the-jaxara-it-ltd',
    description:
      'I worked as a senior team member of a web development team and developing applications using PHP, MySQL, Drupal 7, Yii Framework, CiviCRM. Some of the major projects I worked for are Tripographer, OPUS (Online Project Updating System), Bizlinc, Leapfrog. I worked on Leapfrog Survey project which is still now one of the biggest projects of the company.',
    highlights: [
      'Requirement analysis, communication with development managers.',
      'Analysis of development scope, tools, task break down and time estimation with team members.',
      'Define application architectures, database structures and user interface layout.',
      'Web based application development using PHP, MySQL, ASP.NET 3.5, C#, SQL Server 2008, Drupal CMS (version 6, 7), Yii, Symfony Frameworks, AJAX, CSS, JavaScript, jQuery etc.',
      'Participate on product designing and coding of all tiers based on the technical specification.',
      'Involved in necessary R&D tasks to incorporate new technologies when required.',
      'Participate on training programs regarding cutting edge and advance technologies.',  
      'Troubleshooting web application oriented problems and implementing appropriate fixes.',
      'Guiding the QA team to develop user manuals.',
      'Data migration and scripting.',
      'Code refactoring and optimization.',
      'Follow standard methodologies of project life cycle and code convention.',
      'Version management using Git, SVN and build management using Jenkins.',
      'Perform cross browser compatibility check and and unit testing.'
    ],
  },
  {
    role: 'Project Manager/Team Lead (Software Development)',
    company: 'Divine IT Limited',
    period: 'May 2014 - April 2015',
    url: 'https://www.divineit.net',
    description:
      'Web based application development and team management.',
    highlights: [
      'Seeks ways to apply technology to business processes.',
      'Researches and provides information on technical trends.',
      'Meeting with the client to determine the project’s scope.',
      'Consults with the development team to apply appropriate technical solutions.',
      'Planning the time stamp and possessions needed.',
      'Advise on options, risks, costs vs. benefits, impact on other business processes and system priorities.',
      'Design, development using PHP/MySQL/Ajax/jQuery, testing, deployment and defect resolution of new and existing projects and products.',
      'Clarify the specifications of the system of the client and to understand the nature of his business.',
      'Provide the independent objectives of the IT services that can assist in enhancing the business.'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'The Jaxara It Ltd',
    period: 'April 2011 - April 2014',
    url: 'https://www.linkedin.com/company/the-jaxara-it-ltd',
    description:
      'Main responsibilities include project specific requirement analysis, application development and documentation.',
    highlights: [
      'Developed email marketing and management system with integrated payment system used by US based organization using ASP.NET 3.5, C#, SQL Server 2008, jQuery used as major technology. Mostly worked on existing project enhancement, requirement analysis, and scope analysis of new requirements, application development, code refactoring and optimization.',
      'Developed tourism based web application which supports special features like stylish photo editor; Google map supported tour management system used by US based organization using PHP, MySQL, Drupal 6, jQuery used as major technology. Requirement analysis, task break down and time estimation with team members, application development, debugging, troubleshoots. QA reported issue fixing and version management.'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Revinr (formerly Electronic Business Solution Ltd)',
    period: 'October 2007 - March 2011',
    url: 'https://revinr.com',
    description:
      'Developed several web based online applications and software (accounting, management) using PHP/MySQL/Ajax/jQuery, and sound knowledge and working experience in cakePHP, Joomla. Previously, I was working as an; I was working for an online IT magazine based on bangle Unicode.',
    highlights: [
      'Requirement analysis, specification preparation.',
      'Task allocation and team coordination.',
      'Application development based on specification.',
      'QA reported bug fixing, reporting to team leader.',
      'Application installation, version maintenance, user manual preparation.'
    ],
  },
]

export default function Experience() {
  return (
    <section className="page">
      <h1 className="page-title">Experience</h1>
      <p className="page-subtitle">
        Roles where I&apos;ve grown as an engineer and delivered real impact.
      </p>
      <div className="timeline">
        {jobs.map((job) => (
          <article key={job.company + job.period} className="timeline-item">
            <h3>{job.role}</h3>
            <p className="timeline-meta">
              <a href={job.url}>{job.company}</a> · {job.period}
            </p>
            <p>{job.description}</p>
            <ul style={{ marginTop: '0.75rem', listStyle: 'none' }}>
              {job.highlights.map((item) => (
                <li
                  key={item}
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.95rem',
                    padding: '0.2rem 0',
                  }}
                >
                  → {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
