import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [
            {
                id: 1,
                type: 'check-item',
                attributes: {
                  title: 'We prioritize according to business objectives.',
                  description: 'DevOps is all about alignment. It was born out of frustration and trouble between the disparate priorities and incentives of Development and Operations teams. Alignment comes from unifying towards a common goal.',
                  category: 'alignment',
                  checked: false,
                  tags: ['Культура']
                }
          },
          {
              id: 2,
              type: 'check-item',
              attributes: {
                title: 'We volunteer for tasks rather than having them assigned',
                description: "Autonomy is a critical facet to motivation and job satisfaction. By allowing team members to self-select tasks, you'll see them work on what they're best suited to complete.",
                category: 'alignment',
                checked: false,
                tags: ['Культура']
              }
          },
          {
              id: 3,
              type: 'check-item',
              attributes: {
                title: 'Our team has clear objectives that correspond with our company vision.',
                description: '',
                category: 'alignment',
                checked: false,
                tags: ['Культура', 'Измерения']
              }
          },
          {
              id: 4,
              type: 'check-item',
              attributes: {
                title: "Our product team is focused on sustainable velocity rather than current speed.",
                description: "",
                category: "alignment",
                checked: false,
                tags: ["Культура", "Автоматизация", "Измерения"]
              }
          },
          {
              id: 5,
              type: 'check-item',
              attributes: {
                title: "We focus on time to repair rather than time between issues.",
                description: "",
                category: "alignment",
                checked: false,
                tags: ["Культура", "Измерения"]
              }
          },
          {
              id: 6,
              type: 'check-item',
              attributes: {
                title: "DevOps is not isolated to a specific role in our organization.",
                description: "",
                category: "alignment",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 7,
              type: 'check-item',
              attributes: {
                title: "DevOps is not isolated to a specific team in our organization.",
                description: "",
                category: "alignment",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 9,
              type: 'check-item',
              attributes: {
                title: "Our operational functions are seen as a source of competitive advantage.",
                description: "",
                category: "alignment",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 10,
              type: 'check-item',
              attributes: {
                title: "Representation from our operations team is involved in development sprint planning.",
                description: "",
                category: "context",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 11,
              type: 'check-item',
              attributes: {
                title: "We make potential changes visible to all members of our product team.",
                description: "",
                category: "context",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 12,
              type: 'check-item',
              attributes: {
                title: "We have an automated system for running tasks and receiving notifications with our team chat.",
                description: "",
                category: "context",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 13,
              type: 'check-item',
              attributes: {
                title: "We consult with auditors and regulators regularly and seek guidance when designing systems.",
                description: "",
                category: "context",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 14,
              type: 'check-item',
              attributes: {
                title: "Our team is encouraged to question tasks and priorities.",
                description: "",
                category: "context",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 15,
              type: 'check-item',
              attributes: {
                title: "We have a centralized instant message system including all members of our product team.",
                description: "",
                category: "context",
                checked: false,
                tags: ["Шэринг"]
              }
          },
          {
              id: 16,
              type: 'check-item',
              attributes: {
                title: "All members of our product team have access to environment status, metrics and history.",
                description: "",
                category: "context",
                checked: false,
                tags: ["Шэринг", "Измерения"]
              }
          },
          {
              id: 17,
              type: 'check-item',
              attributes: {
                title: "All members of our product team have access to code status, metrics and history.",
                description: "",
                category: "context",
                checked: false,
                tags: ["Шэринг", "Измерения"]
              }
          },
          {
              id: 18,
              type: 'check-item',
              attributes: {
                title: "We cultivate an environment of continuous learning.",
                description: "",
                category: "learning",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 19,
              type: 'check-item',
              attributes: {
                title: "We regularly celebrate our product team's learnings and success internally.",
                description: "",
                category: "learning",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 20,
              type: 'check-item',
              attributes: {
                title: "We regularly share our product team's learnings and success with the rest of our organization.",
                description: "",
                category: "learning",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 21,
              type: 'check-item',
              attributes: {
                title: "We openly discuss failures in order to share learning.",
                description: "",
                category: "learning",
                checked: false,
                tags: ["Культура", "Шэринг", "Измерения"]
              }
          },
          {
              id: 22,
              type: 'check-item',
              attributes: {
                title: "We identify skills needed to improve or address future objectives.",
                description: "",
                category: "learning",
                checked: false,
                tags: ["Культура", "Измерения"]
              }
          },
          {
              id: 23,
              type: 'check-item',
              attributes: {
                title: "We strive to examine how we complete our work, and how effectively we complete it.",
                description: "",
                category: "learning",
                checked: false,
                tags: ["Культура", "Измерения"]
              }
          },
          {
              id: 24,
              type: 'check-item',
              attributes: {
                title: "We estimate based on measurement and past experience.",
                description: "",
                category: "",
                checked: false,
                tags: ["Измерения"]
              }
          },
          {
              id: 25,
              type: 'check-item',
              attributes: {
                title: "Our software development cycle is 2 weeks or less.",
                description: "",
                category: "lifecycle",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 26,
              type: 'check-item',
              attributes: {
                title: "Our software development cycle is defined by releasing a working change into production.",
                description: "Iterative development and process optimization depends on repeatedly performing the critical functions of building and deploying software. The more it's done, the better it's understood, the easier it is to improve and automate.",
                category: "lifecycle",
                checked: false,
                tags: ["Культура", "Измерения"]
              }
          },
          {
              id: 27,
              type: 'check-item',
              attributes: {
                title: "We stop development upon discovering a defect and prioritize its repair.",
                description: "",
                category: "lifecycle",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 28,
              type: 'check-item',
              attributes: {
                title: "Developers or product owners are able to deploy our product to production.",
                description: "The focus here is empowering the most informed to perform the task. Someone intimately familiar with a change is best positioned to evaluate its performance and correctness. Developers and POs should be empowered to measure and visualize the operation of the change as well, in order to give them a holistic view of the changed system.",
                category: "lifecycle",
                checked: false,
                tags: ["Культура", "Автоматизация"]
              }
          },
          {
              id: 29,
              type: 'check-item',
              attributes: {
                title: "We have automated testing prior to automated production deployment.",
                description: "Production deploys can still be manually initiated in cases where a signoff is required, yet the testing, deployment process and validation should be entirely automated to ensure consistency, accuracy and optimal speed. Automating deploys means no copy and paste, less security risk, more auditability, more confidence.",
                category: "lifecycle",
                checked: false,
                tags: ["Автоматизация", "Тестирование"]
              }
          },
          {
              id: 30,
              type: 'check-item',
              attributes: {
                title: "Our configuration of systems is automated.",
                description: "Friends don't let friends manually configure systems.",
                category: "lifecycle",
                checked: false,
                tags: ["Автоматизация"]
              }
          },
          {
              id: 31,
              type: 'check-item',
              attributes: {
                title: "Our deployed system configuration is immutable.",
                description: "Immutability is an ideal state as it allows operations to focus on optimizing consistent and predictable systems.",
                category: "lifecycle",
                checked: false,
                tags: ["Автоматизация"]
              }
          },
          {
              id: 32,
              type: 'check-item',
              attributes: {
                title: "Our release and deployment automation is environment agnostic.",
                description: "To avoid fragmentation or repetition, it's best to limit environmental differences to variable values only.",
                category: "lifecycle",
                checked: false,
                tags: ["Автоматизация", "Тестирование"]
              }
          },
          {
              id: 33,
              type: 'check-item',
              attributes: {
                title: "Our subject matter expertise is not isolated to individuals.",
                description: "If you're lucky, you're surrounded by experts. Ideally, they're not just islands of knowledge and responsibility, but part of a peer group within the organization.",
                category: "organisation",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 34,
              type: 'check-item',
              attributes: {
                title: "We enable peer and cross-functional review for changes",
                description: "",
                category: "organisation",
                checked: false,
                tags: ["Культура", "Шэринг", "Тестирование"]
              }
          },
          {
              id: 35,
              type: 'check-item',
              attributes: {
                title: "Our organization is configured around cross-functional teams.",
                description: "Cross-functional teams are more empowered to build and deploy their own software without being hindered by constraints. They also avoid an 'us vs them' effect of siloed functional teams, learn from, and foster awareness and empathy for eachothers priorities and interests.",
                category: "organisation",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 36,
              type: 'check-item',
              attributes: {
                title: "Our teams are customer and product oriented.",
                description: "Customer focus helps align teams towards valuable goals, and keeps development and engineering zeroed in on delivery and processing feedback.",
                category: "organisation",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 37,
              type: 'check-item',
              attributes: {
                title: "We review priorities on a regular basis.",
                description: "",
                category: "organisation",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 38,
              type: 'check-item',
              attributes: {
                title: "Our developers have access to production-like systems to work and test on.",
                description: "",
                category: "organisation",
                checked: false,
                tags: ["Автоматизация", "Тестирование"]
              }
          },
          {
              id: 39,
              type: 'check-item',
              attributes: {
                title: "Our developers have access to production-like data to work and test against.",
                description: "",
                category: "organisation",
                checked: false,
                tags: ["Автоматизация", "Тестирование"]
              }
          },
          {
              id: 40,
              type: 'check-item',
              attributes: {
                title: "Our developers have access to dependencies required to build and test software.",
                description: "",
                category: "organisation",
                checked: false,
                tags: ["Автоматизация", "Тестирование"]
              }
          },
          {
              id: 41,
              type: 'check-item',
              attributes: {
                title: "Our organization follows agile development practices.",
                description: "To realize the full power of a focus on DevOps, feedback and regular iteration are critical. DevOps is built on agile.",
                category: "process",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 42,
              type: 'check-item',
              attributes: {
                title: "We practice blameless postmortems.",
                description: "Focus on learning and continual improvement. This is the human equivalent of focusing on MTTR vs MTBF. Read: John Allspaw's great article on Etsy's process",
                category: "process",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 43,
              type: 'check-item',
              attributes: {
                title: "We regularly examine constraints in our delivery process.",
                description: "",
                category: "process",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 44,
              type: 'check-item',
              attributes: {
                title: "Our system configuration is committed into version control.",
                description: "",
                category: "process",
                checked: false,
                tags: ["Автоматизация", "Тестирование"]
              }
          },
          {
              id: 45,
              type: 'check-item',
              attributes: {
                title: "Our documentation is version controlled and shared.",
                description: "",
                category: "process",
                checked: false,
                tags: ["Шэринг"]
              }
          },
          {
              id: 46,
              type: 'check-item',
              attributes: {
                title: "We maintain a backlog of tasks, visible to all team members and available for comment.",
                description: "",
                category: "process",
                checked: false,
                tags: ["Шэринг"]
              }
          },
          {
              id: 47,
              type: 'check-item',
              attributes: {
                title: "We practice test or behaviour driven development.",
                description: "",
                category: "process",
                checked: false,
                tags: ["Тестирование"]
              }
          },
          {
              id: 48,
              type: 'check-item',
              attributes: {
                title: "We test our changes against a merge with our mainline code.",
                description: "Until you prove your code isn't a destructive regression, it shouldn't be deployed for someone else to discover. Automated testing and frequent merging should catch most of these issues, and make sure you don't find out about problems from someone else - or worse, Twitter.",
                category: "process",
                checked: false,
                tags: ["Тестирование"]
              }
          },
          {
              id: 49,
              type: 'check-item',
              attributes: {
                title: "We test our changes against production-equivalent load and use patterns.",
                description: "",
                category: "process",
                checked: false,
                tags: ["Тестирование"]
              }
          }
      ]
    });
  }
});
