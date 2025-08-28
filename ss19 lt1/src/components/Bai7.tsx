import React, { useRef } from 'react'

export default function Bai7() {
  const targetRef = useRef<HTMLDivElement | null>(null)

  const handleScroll = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div>
      <button onClick={handleScroll}>
        Đi tới phần nội dung
      </button>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, qui perspiciatis vero assumenda adipisci aspernatur ratione in officia odit minus harum nesciunt. Ut maxime at eum. Ipsam quis iure dolores.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse corporis id quod hic suscipit sequi quisquam repudiandae molestias aliquid nisi labore, commodi quos provident obcaecati nostrum cum cumque iste saepe.
        Hic veritatis reprehenderit suscipit nihil soluta quaerat mollitia nisi quia. Ducimus nobis, quibusdam labore ipsum harum odio atque ea earum a rem possimus reprehenderit minus voluptates quam. Totam, fugit nihil.
        Nostrum, debitis accusantium necessitatibus quaerat ab reiciendis nihil officia iusto aperiam quia quae qui maxime, veritatis iure sunt quidem in nemo impedit quibusdam explicabo magni sit vel eligendi voluptate. Maiores!
        Praesentium iusto voluptate dolorum doloremque reprehenderit magni, autem culpa fuga earum deleniti corrupti reiciendis ullam nobis aut accusamus distinctio aspernatur dolores at voluptatem voluptatibus voluptas quis quidem. Deleniti, vero ut?
        Dicta, blanditiis error rem sapiente non placeat amet sit fugiat totam quo vero in, perspiciatis corrupti tenetur necessitatibus magnam, tempore animi quod aliquam. Totam earum assumenda pariatur explicabo temporibus beatae.
        Repudiandae facilis totam eveniet autem consectetur atque error sapiente ipsum laboriosam eligendi voluptas culpa doloribus quam a et sint quos cum enim, veritatis natus! Non quod totam ad expedita ex.
        Voluptas voluptate sed autem debitis fuga voluptatem hic eum quasi incidunt dolores ea quos illum exercitationem ipsam dolor excepturi minima, fugiat eos expedita laborum laboriosam praesentium quaerat. Corporis, ratione maxime?
        Distinctio quibusdam earum non fuga nulla, et animi voluptates pariatur repellat! Ipsa ipsam, nobis magnam, asperiores eligendi necessitatibus delectus quas nulla beatae repellendus repudiandae harum tempora facere minima commodi eaque!
        Iste cupiditate, porro illum earum nisi possimus tempore nemo sit distinctio, cum, omnis consequuntur labore magnam ex. Porro labore omnis laborum delectus nam mollitia, sequi quam, nihil iure nobis eos.
        Sequi sapiente est neque minus. Libero eaque ut itaque pariatur dignissimos odio aliquid vel, quisquam vitae neque cumque asperiores? Iusto, atque. Sequi, nobis eos pariatur delectus quam illo ducimus tempore.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet odio id nesciunt nisi veritatis voluptate ipsa aliquid ab inventore voluptatum? Quis qui eum modi nobis veniam recusandae ratione ducimus possimus.
        Alias rerum necessitatibus repellat amet quas libero totam dolorem, deleniti assumenda, ratione, voluptates illo aut? Tenetur doloremque aut perferendis harum voluptates, quia facere incidunt qui veritatis voluptatem, maxime excepturi aspernatur?
        Iure blanditiis odio impedit illum nemo atque, soluta voluptatum alias est suscipit, iste excepturi error quod fugit! Debitis unde vitae esse laboriosam. Tempora fuga adipisci laboriosam reprehenderit aut, esse quis?
        Corporis vero est eligendi repudiandae unde, dignissimos assumenda. Placeat doloremque, dignissimos eveniet recusandae aut natus minus reiciendis magni, optio illo, corrupti est! Nulla veritatis eius dolorem doloribus porro aliquid. Dolorum!
        Asperiores ex rerum corporis tempora. Recusandae modi quasi, sunt magnam dolorem adipisci debitis accusantium harum fuga ullam esse, reiciendis incidunt quos alias, asperiores cum saepe aperiam iure eius. Voluptatum, quas.
        Laborum tempore voluptatibus quidem. Unde quasi fuga recusandae nobis, minus dolore ut officiis! Debitis vel nemo nisi illo! Non consequuntur ducimus animi laborum adipisci repellendus tempore eveniet doloribus praesentium. Sunt?
        Corporis, magnam aliquam soluta recusandae ab impedit, quidem id nemo nam dolorem consequatur quod sapiente! Nesciunt in molestiae optio illo facilis, repellat at quam consequatur odio voluptate, veritatis iure possimus.
        Quasi fuga tempora eos iusto quos quia dolorum saepe blanditiis, ipsam atque. Corporis sequi quo officia dolorum harum mollitia at accusamus quos? A fugit ratione suscipit provident totam recusandae doloribus?
        Tempora, pariatur, labore nesciunt temporibus sint, velit eaque tempore voluptate voluptatum eligendi expedita ad suscipit! Pariatur nesciunt, porro molestias aliquid rerum magnam dolor inventore veritatis, eaque consequuntur blanditiis architecto repellat!
        Cupiditate molestias sit pariatur, error officiis, impedit dignissimos sed commodi, animi quod ullam similique deleniti corporis. Perferendis ad laborum necessitatibus, quas eveniet illum delectus magni dignissimos error saepe veniam est.
        Rem optio nam doloremque nostrum ipsa consequuntur suscipit nemo corporis neque inventore natus nisi odit quaerat, deserunt pariatur esse quo tenetur fuga voluptas magni eveniet veniam culpa vero. Animi, sunt!
        Tempora corporis ducimus labore expedita fugit, perferendis officiis vero aliquam ut sequi dolore. Illum assumenda impedit libero voluptates sapiente iusto fugiat aspernatur unde, aperiam labore numquam laborum, illo, similique voluptatem.
        Possimus debitis, maiores impedit vitae a temporibus consequatur necessitatibus quaerat voluptates exercitationem non facilis provident, ipsa perferendis doloremque fugiat perspiciatis rerum alias in illo adipisci ratione itaque quibusdam excepturi? Nesciunt!
        Nisi ea delectus culpa, ipsum aliquam quod corporis tempore praesentium debitis nobis, cumque, recusandae consequuntur! Illum, delectus. Nesciunt quae tempora non perferendis. Iure, perspiciatis veritatis. Distinctio iusto soluta non porro.
        Ex repellat nam placeat facere, impedit ullam itaque voluptas? Iste exercitationem eligendi fugit officiis repudiandae porro amet dolor. Et incidunt pariatur autem quaerat nulla facere est exercitationem quisquam cupiditate aliquam?
        Veniam, dolorum fuga! Alias odit consequatur quisquam libero dolorem. Odit laudantium molestiae rem mollitia quod, amet maxime. Ad, voluptatem ab exercitationem delectus quasi deleniti dolorum aspernatur? Eligendi minus unde veritatis.
        Saepe impedit debitis tenetur provident nesciunt necessitatibus fugiat doloribus excepturi labore eaque similique, quibusdam minus facere quidem repellat minima harum, quam ab hic vitae aliquid non earum officiis ratione. Id.
        Beatae, minus accusamus? Ipsa odit fugit accusantium voluptate asperiores earum eius itaque consectetur beatae. Laudantium animi ab, laboriosam pariatur cupiditate maxime ea fugiat reprehenderit repellendus voluptate qui natus repudiandae sapiente.
        Incidunt inventore repellat eligendi. Ratione magnam, magni quia esse perspiciatis, cum ad alias voluptatibus quidem obcaecati commodi ea dolorem doloribus voluptate tenetur porro reprehenderit aut aliquam earum excepturi incidunt ducimus!
        Laudantium dolorum blanditiis natus, incidunt odio molestias harum doloremque sit hic necessitatibus neque alias reprehenderit officia quisquam similique autem dolor quam quo maxime architecto, excepturi earum quia reiciendis dicta. Dolor.
        Eveniet ipsum omnis distinctio veniam modi dolores architecto officiis tenetur quas assumenda doloribus perferendis, magnam, magni voluptatibus sunt, sequi quibusdam nam necessitatibus similique corporis velit dicta deserunt eos. Debitis, voluptatum.
        Nesciunt ex laudantium dolores inventore expedita earum porro, libero quam quas labore, eveniet repudiandae modi molestiae. Porro nisi animi blanditiis. Reprehenderit dolor nam, expedita laudantium ullam numquam magnam dicta quae.
        Quae veritatis itaque nobis, praesentium minima velit? Minima dicta laborum repellat laudantium veniam quasi quisquam numquam aliquam fugit? Architecto, est doloribus placeat sapiente veniam numquam repellat vitae laudantium laborum quibusdam?
        Laudantium nisi quas in, quisquam ab mollitia! Deleniti, distinctio possimus. Harum exercitationem culpa laboriosam dolor nesciunt dolorum doloribus optio at. Corrupti perspiciatis explicabo aspernatur quia architecto corporis sit eos incidunt?
        Quo, blanditiis est! Ex obcaecati rem aperiam debitis dicta maiores, incidunt accusantium dolore. Consequuntur voluptatibus, animi sequi explicabo eius facilis facere! Alias facilis excepturi similique vitae natus aliquid, rerum voluptatibus.
        Laudantium modi eius perspiciatis ipsum quam vel veniam nostrum quo repudiandae nam? Natus excepturi fugiat, voluptate laborum in obcaecati saepe numquam rerum, quo eligendi est minima voluptates, debitis unde deleniti.
        Ipsam autem architecto ad rerum ratione? Ipsa molestiae sed ad, minima eaque voluptas similique accusamus soluta corporis molestias dicta natus non praesentium pariatur odit laudantium aliquam. Accusamus expedita adipisci dolorum?
        Minus recusandae ratione modi mollitia ut labore maxime voluptas, nesciunt repellendus quidem aliquam, sint beatae! Atque, voluptatibus vero? Aliquam eos sunt id, esse ipsa laborum obcaecati reiciendis ea aliquid dicta?
        Aspernatur, assumenda labore iste facilis debitis temporibus vero! Maiores dicta autem cupiditate alias suscipit, sunt natus possimus, veniam modi repellat quisquam eveniet qui laboriosam ad. Autem itaque porro sapiente earum?
        Numquam consectetur saepe voluptatibus debitis eligendi error quam illum culpa laboriosam, veritatis fugiat dolorum nihil amet cupiditate quia rerum eveniet enim placeat natus quae facilis adipisci consequatur? Placeat, est excepturi!
        Temporibus nihil sunt, rerum ad esse nobis tempore ex a, dolore quisquam vel similique. Recusandae sint animi, fugit reiciendis esse, labore autem voluptate sunt voluptas illo ducimus vitae. Quae, tempore?
        Exercitationem illo veniam dignissimos molestiae debitis voluptatibus rem dolorem libero laboriosam, repellat quibusdam. Delectus, officiis quidem temporibus quo quisquam in deserunt, culpa, doloribus aut necessitatibus facere eaque amet beatae vitae.
        Commodi accusamus nisi iure perferendis laborum possimus maxime assumenda eum, error ex iusto libero deleniti qui fuga, non adipisci cumque excepturi harum ullam sed distinctio! Dolorum quam totam ipsa doloremque.
        Minus officiis velit iste expedita optio placeat commodi! Odio, aliquam hic quia quae eum voluptas mollitia repellendus eligendi quibusdam incidunt voluptatum quis non natus, tempora rerum quaerat, quisquam illum molestiae.
        Labore blanditiis pariatur id exercitationem animi minima delectus, itaque minus placeat voluptates nam! Ipsum veritatis labore modi impedit voluptate sit rem numquam voluptas, exercitationem nobis animi explicabo. Fugiat, dolorum sit.
        Obcaecati, suscipit dolorum itaque molestiae nemo assumenda laudantium nobis necessitatibus reiciendis consequuntur blanditiis. Debitis ducimus dolor molestiae facere dolorem dolorum, temporibus quod dolores eum tenetur! Nostrum neque adipisci fugit sit.
        Assumenda mollitia, amet provident error, corrupti doloremque necessitatibus iste molestias consectetur neque sit voluptatem natus facilis odio doloribus ipsa repellendus, excepturi fugiat similique magnam! Sequi veritatis voluptate cum aliquam dolore!
        Ipsam tempore, iusto tenetur dignissimos repellendus dolorem nobis vel minus sit voluptatem quas magnam optio nam deleniti voluptates esse temporibus, distinctio blanditiis beatae accusamus quo. Tenetur consequatur rem ex facilis.
        Blanditiis nemo excepturi corporis. Vitae, ipsum quis! Quos obcaecati, architecto excepturi doloremque dolore, nulla officiis laboriosam a non hic esse. Fuga magni veritatis eveniet ab libero accusamus odit dicta suscipit.
        Culpa est quisquam nulla temporibus unde aperiam doloremque accusamus, saepe molestias sed ducimus laboriosam quibusdam mollitia rerum accusantium provident, vitae laudantium tenetur nesciunt inventore quos. Consequatur maiores omnis et temporibus.
        Unde consequatur facilis id eligendi iusto quo temporibus saepe, corporis eum illum in eos omnis voluptatum cum adipisci hic quisquam nihil, vero assumenda nostrum quasi suscipit dolor provident dolorem. Pariatur.
        Recusandae, corrupti labore. Repudiandae magnam sint eaque id? Rerum aliquam aperiam perspiciatis ab. Illum at totam, explicabo, dignissimos vel debitis, alias ipsa perferendis iusto quia incidunt blanditiis sapiente. Sed, quis?
        Sequi voluptatem quidem quibusdam quas impedit qui sit, nihil blanditiis veniam perferendis numquam culpa ab iure assumenda eaque. Possimus accusantium id libero, mollitia molestias rem natus quia nobis aliquam accusamus!
        Sapiente similique magni et rem delectus, iste earum atque esse debitis nulla? Sapiente quos dolore assumenda dolor molestiae alias voluptatem repellendus sint, nulla omnis, voluptates tenetur ad hic dolorum. Architecto.
        Cumque fugit ex voluptas distinctio consequatur quod cum libero consequuntur eius architecto non commodi quidem magnam porro, unde reiciendis nobis illo sit repellat quos? Sequi minima odio itaque? Neque, aut.
        Dolores doloremque ex aliquam fugit excepturi reprehenderit incidunt consequatur doloribus accusantium distinctio sequi praesentium facere quasi optio eligendi qui, autem repellat placeat consectetur. Quibusdam vero debitis minus deleniti provident architecto.
        Minus eveniet reiciendis nesciunt corporis. Doloremque provident ipsam numquam? Eos, similique reprehenderit sint maxime nostrum cupiditate alias facere sequi quibusdam illo labore rem iusto, fugit corrupti provident voluptatem rerum amet.
        Dolore enim labore explicabo, deleniti delectus voluptatem unde aut ipsam, veniam porro tempora! Libero veritatis ut minus quo! Enim nostrum dolorum dolor quibusdam aliquid porro iure doloremque nesciunt ratione nisi.
        Doloremque autem corporis magni earum labore beatae soluta laboriosam aspernatur blanditiis, aperiam ipsam itaque sint sunt dolore nulla voluptate repellat perferendis ducimus iste, animi sit! Culpa sed laudantium tempore nam!
        Laborum labore tempore fugit nulla tenetur aspernatur reprehenderit esse laboriosam nihil quas quasi, iure accusamus eum ipsa consequuntur officiis quaerat sint provident est. Vero, illum aspernatur dicta qui inventore autem.
      </div>
      <h1 ref={targetRef}>
        Nội dung 
      </h1>
    </div>
  )
}
