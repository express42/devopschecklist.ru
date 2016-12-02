import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [
            {
                id: 1,
                type: 'check-item',
                attributes: {
                  title: 'Наши приоритеты соответствуют бизнес целям',
                  description: 'Идея DevOps завязана на концепции согласованности. Эта идея появилась в следствии несовместимых приоритетов и стремлений команд разработки и эксплуатации.',
                  category: 'alignment',
                  checked: false,
                  tags: ['Культура']
                }
          },
          {
              id: 2,
              type: 'check-item',
              attributes: {
                title: 'Мы предпочитаем добровольно браться за задачи, а не ждать пока нам их назначат.',
                description: 'Автономность - важная часть мотивации и удовлетворенности работой. Позволяя членам команды выбирать себе задачи, вы увидите, что они будут заниматься теми задачами, для выполнения которых они подходят лучше всего.',
                category: 'alignment',
                checked: false,
                tags: ['Культура']
              }
          },
          {
              id: 3,
              type: 'check-item',
              attributes: {
                title: 'У нашей команды есть четкие цели, которые соответствуют видению компании',
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
                title: 'Наша продуктовая команда ориентируется на поддержание устойчивой скорости работы, меньше концентрируясь на текущей скорости',
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
                title: 'Мы концентрируем свое внимание на времени, требуемом для починки, а не на времени между инцидентами',
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
                title: 'DevOps не ограничивается какой-то определенной ролью в нашей организации.',
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
                title: 'DevOps не ограничивается какой-то определенной командой в нашей организации.',
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
                title: 'Наши производственные функции рассматриваются в качестве источника конкурентного преимущества.',
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
                title: 'Представители нашей команды эксплуатации принимают участие в планировании спринтов для разработки.',
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
                title: 'Мы делаем потенциальные изменения видимыми для всех членов нашей продуктовой команды.',
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
                title: 'У нас имеется автоматизированная система запуска задач и настроена возможность получения нотификаций об их статусе в наш командный чат.',
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
                title: 'Мы регулярно консультируемся с аудиторами и органами регулирования, и просим наставлений при проектировании систем.',
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
                title: 'Обсуждение задач и их приоритетов является обычной практикой в нашей команде',
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
                title: 'У нас имеется централизованная система отправки мгновенных сообщений всем членам нашей продуктовой команды.',
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
                title: 'Все члены нашей продуктовой команды имеют доступ к информации о статусе окружения, метриках и истории.',
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
                title: 'Все члены нашей продуктовой команды имеют доступ к информации о статусе кода, метриках и истории.',
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
                title: 'Мы культивируем среду непрерывного обучения.',
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
                title: 'Мы регулярно отмечаем успехи и новые знания, полученные нашей продуктовой командой.',
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
                title: 'Мы регулярно делимся полученными знаниями и успехами нашей продуктовой команды с остальной частью организации.',
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
                title: 'Мы открыто обсуждаем провалы и неудачи, чтобы поделиться опытом с другими.',
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
                title: 'Мы выявляем навыки, необходимые для совершенстования и достижения будущих целей.',
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
                title: 'Мы стремимся проводить анализ того, как мы выполняем нашу работу и как эффективно мы это делаем.',
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
                title: 'Наши прогнозы основаны на измерениях и прошлом опыте',
                description: "",
                category: "learning",
                checked: false,
                tags: ["Измерения"]
              }
          },
          {
              id: 25,
              type: 'check-item',
              attributes: {
                title: 'Цикл разработки нашего ПО равен 2 неделям или меньше.',
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
                title: 'Цикл разработки нашего ПО определяется релизом рабочего изменения в продакшн.',
                description: 'Итеративная разработка и оптимизация технологического процесса строятся на основе повторяющейся процедуры выполнения критически важных функций сборки и деплоя ПО. Чем чаще это делать, тем яснее и понятнее будет сам процесс и тем легче будет его автоматизировать и улучшить. ',
                category: "lifecycle",
                checked: false,
                tags: ["Культура", "Измерения"]
              }
          },
          {
              id: 27,
              type: 'check-item',
              attributes: {
                title: 'Мы приостанавливаем разработку при обнаружении неисправности и ставим в качестве приоритета её устранение.',
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
                title: 'Разработчики или владельцы продуктов могут производить деплой нашего продукта в продакшн.',
                description: 'Целью здесь является дать полномочия выполнять данную задачу наиболее информированным людям. Кто-то, кто близко знаком с изменением, лучше все подходит для оценки правильности и работы изменения. Разработчики и владельцы продуктов также должны иметь возможность измерять и визуализировать работу изменения для получения целостной картины об измененной системе.  ',
                category: "lifecycle",
                checked: false,
                tags: ["Культура", "Автоматизация"]
              }
          },
          {
              id: 29,
              type: 'check-item',
              attributes: {
                title: 'Мы автоматизировали тестирование до того, как автоматизировали деплой в продакшн.',
                description: 'Деплои в продакшн все еще могут прозводиться в ручную в случае, когда для этого требуется одобрение (signoff), однако тестирование, процесс разработки и валидации должны быть полностью автоматизированы для обеспечения непротиворичевости, точности и оптимальной скорости. Автоматизация деплоев означает отсутствие ручных действий, снижение рисков безопасности, повышение контролируемости процесса и уверенности в нем. ',
                category: "lifecycle",
                checked: false,
                tags: ["Автоматизация", "Тестирование"]
              }
          },
          {
              id: 30,
              type: 'check-item',
              attributes: {
                title: 'Наш процесс настройки конфигурации систем автоматизирован.',
                description: 'Друзья не дают друзьям вручную настраивать системы.',
                category: "lifecycle",
                checked: false,
                tags: ["Автоматизация"]
              }
          },
          {
              id: 31,
              type: 'check-item',
              attributes: {
                title: 'Конфигурация задеплоенной системы неизменна.',
                description: 'Неизменность является идеальным состоянием, т.к. позволяет эксплуатации фокусироваться на оптимизации непротиворечивых и предсказуемых систем.',
                category: "lifecycle",
                checked: false,
                tags: ["Автоматизация"]
              }
          },
          {
              id: 32,
              type: 'check-item',
              attributes: {
                title: 'Автоматизация релиза и деплоя не имеет привязки к окружению.',
                description: 'Для того чтобы избежать фрагментации и повторений лучше всего ограничить различия в окружениях лишь настрокой значений переменных.',
                category: "lifecycle",
                checked: false,
                tags: ["Автоматизация", "Тестирование"]
              }
          },
          {
              id: 33,
              type: 'check-item',
              attributes: {
                title: 'Наша экспертиза в предметной области не ограничивается несколькими людьми.',
                description: 'Допустим, что тебе повезло, и ты оказался окружен экспертами.  В идеальном случае, они не представляют из себя просто острова знаний и ответсвенности , а являются частью группы на равне со всеми в рамках одной организации.',
                category: "organisation",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 34,
              type: 'check-item',
              attributes: {
                title: 'Мы даем возможность равноправного и кросс-функционального анализа изменений',
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
                title: 'Наша организация выстроена вокруг кросс-функциональных команд.',
                description: 'Кросс-функциональные команды имеют больше возможностей собирать и деплоить их собственное ПО без каких-либо ограничений.  Они позволяют избежать "мы против них" эффекта, который наблюдается в случае отдельных функциональных команд, наладить процесс взаимного обучения и достигнуть понимания приоритетов и интересов друг друга.',
                category: "organisation",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 36,
              type: 'check-item',
              attributes: {
                title: 'Наши команды являются клиент и продукт-ориентированными.',
                description: 'Ориентация на клиента помогает направить команды на реализацию значимых целей и заставляет разработку и проектирование фокусировать свое внимание на поставках и обработке отзывов. ',
                category: "organisation",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 37,
              type: 'check-item',
              attributes: {
                title: 'Мы перессматриваем приоритеты на регулярной основе.',
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
                title: 'Наши разработчики имеют доступ к системам, аналогичным производственным, для работы и тестирования.',
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
                title: 'Наши разработчики имеют доступ к данным, аналогичным производственным, для работы и тестирования.',
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
                title: 'Наши разработчики имеют доступ к зависимостям, требуемым для сборки и тестирования ПО.',
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
                title: 'Наша организация использует Agile-практики.',
                description: 'Для того, чтобы в полной мере реализовать мощь DevOps, обратные связи и регулярные итерации имеют решающее значение. DevOps построен на Agile.',
                category: "process",
                checked: false,
                tags: ["Культура"]
              }
          },
          {
              id: 42,
              type: 'check-item',
              attributes: {
                title: 'Мы практикуем разбор и анализ инцидентов без обвинения кого-либо за совершенные ошибки.',
                description: 'Фокус на обучении и постоянном совершенствовании. Это сродни фокусированию на MTTR vs MTBF, только применитоельно к человеку. Читайте: замечательная статья John Allspaw о процессах в Etsy',
                category: "process",
                checked: false,
                tags: ["Культура", "Шэринг"]
              }
          },
          {
              id: 43,
              type: 'check-item',
              attributes: {
                title: 'Мы регулярно рассматриваем существующие ограничения в нашем процессе доставки.',
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
                title: 'Наша конфигурация хранится в системе управления версиями.',
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
                title: 'Наша документация версионируется и доступна всем',
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
                title: 'Мы поддерживаем список накопившихся задач, который виден всем членам команды и доступен для комментариев.',
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
                title: 'Наша разработка основана на TDD (test-driven development) или BDD (behaviour-driven development)',
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
                title: 'Мы тестируем изменения перед слиянием в основную ветку.',
                description: 'Пока ты не докажешь, что твой код не вносит деструктивную регрессию, его не следует деплоить.  Автоматизированное тестирование и частые мерджи должны отлавливать большинство таких проблем с кодом. Сделай все, чтобы быть уверенным, что не узнаешь потом о проблеме от кого-то еще или, что еще хуже, из Твитера.',
                category: "process",
                checked: false,
                tags: ["Тестирование"]
              }
          },
          {
              id: 49,
              type: 'check-item',
              attributes: {
                title: 'Мы проверяем наши изменения нагрузочным тестированием на основе реальных данных и шаблонов использования.',
                description: "",
                category: "process",
                checked: false,
                tags: ["Тестирование"]
              }
          }
      ],
      included: [
        {
          id: 'alignment',
          type: 'category',
          attributes: {
            title: 'Согласованность',
            description: 'Объединение групповых и индивидуальных целей, а также направления деятельности, на основе одного представления об организации.',
          },
          relationships: {
            checkItems: {
              data: [
                {id: 1, type: 'check-item'},
                {id: 2, type: 'check-item'},
                {id: 3, type: 'check-item'},
                {id: 4, type: 'check-item'},
                {id: 5, type: 'check-item'},
                {id: 6, type: 'check-item'},
                {id: 7, type: 'check-item'},
                {id: 8, type: 'check-item'},
                {id: 9, type: 'check-item'},
              ]
            }
          }
        },
        {
          id: 'context',
          type: 'category',
          attributes: {
            title: 'Контекст',
            description: 'Делая необходимую информацию и список контактов доступными для тех, кому это требуется и когда это требуется.',
          },
          relationships: {
            checkItems: {
              data: [
                {id: 10, type: 'check-item'},
                {id: 11, type: 'check-item'},
                {id: 12, type: 'check-item'},
                {id: 13, type: 'check-item'},
                {id: 14, type: 'check-item'},
                {id: 15, type: 'check-item'},
                {id: 16, type: 'check-item'},
                {id: 17, type: 'check-item'},
              ]
            }
          }
        },
        {
          id: 'learning',
          type: 'category',
          attributes: {
            title: 'Обучение',
            description: 'Предоставление возможностей личностного роста и стимулирование понимания через процесс постоянного совершенстования.',
          },
          relationships: {
            checkItems: {
              data: [
                {id: 18, type: 'check-item'},
                {id: 19, type: 'check-item'},
                {id: 20, type: 'check-item'},
                {id: 21, type: 'check-item'},
                {id: 22, type: 'check-item'},
                {id: 23, type: 'check-item'},
                {id: 24, type: 'check-item'},
              ]
            }
          }
        },
        {
          id: 'lifecycle',
          type: 'category',
          attributes: {
            title: 'Жизненный цикл',
            description: 'Отношение к ПО как к продукту, заслуживающему заботы, внимания и размышлений в рамках постоянно меняющейся экосистемы.',
          },
          relationships: {
            checkItems: {
              data: [
                {id: 25, type: 'check-item'},
                {id: 26, type: 'check-item'},
                {id: 27, type: 'check-item'},
                {id: 28, type: 'check-item'},
                {id: 29, type: 'check-item'},
                {id: 30, type: 'check-item'},
                {id: 31, type: 'check-item'},
                {id: 32, type: 'check-item'},
              ]
            }
          }
        },
        {
          id: 'organization',
          type: 'category',
          attributes: {
            title: 'Организация',
            description: 'Создание структуры, обеспечивающей взаимодействие и сплоченность, которая позволит поддерживать сотрудничество и продуктивность работы.',
          },
          relationships: {
            checkItems: {
              data: [
                {id: 33, type: 'check-item'},
                {id: 34, type: 'check-item'},
                {id: 35, type: 'check-item'},
                {id: 36, type: 'check-item'},
                {id: 37, type: 'check-item'},
                {id: 38, type: 'check-item'},
                {id: 39, type: 'check-item'},
                {id: 40, type: 'check-item'},
              ]
            }
          }
        },
        {
          id: 'process',
          type: 'category',
          attributes: {
            title: 'Процесс',
            description: 'Rituals crafted to foster consistency and confidence, providing a framework for continuous improvement.',
          },
          relationships: {
            checkItems: {
              data: [
                {id: 41, type: 'check-item'},
                {id: 42, type: 'check-item'},
                {id: 43, type: 'check-item'},
                {id: 44, type: 'check-item'},
                {id: 45, type: 'check-item'},
                {id: 46, type: 'check-item'},
                {id: 47, type: 'check-item'},
                {id: 48, type: 'check-item'},
                {id: 49, type: 'check-item'},
              ]
            }
          }
        }
      ]
    });
  }
});
