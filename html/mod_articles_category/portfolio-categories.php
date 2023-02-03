<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_articles_category
 *
 * @copyright   (C) 2010 Open Source Matters, Inc. <https://www.joomla.org>
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

use Joomla\CMS\Helper\ModuleHelper;
use Joomla\CMS\Language\Text;
use Joomla\Component\Fields\Administrator\Helper\FieldsHelper;
\Joomla\CMS\HTML\HTMLHelper::_('bootstrap.modal', '.selector', []);

if (!$list)
{
	return;
}
$items = $list;
$item_count = 300;
$catid = $items[0]->catid;
$category = JCategories::getInstance('Content')->get($catid);
?>
<div class="projects-title rellax" data-rellax-speed="4">&lt;projects/&gt;</div>

<div id="projects" class="portfolio">

	<div class="container">
		<header class="mb-5">
			<h2 class="title mb-4" data-aos="fade-up"><?= $module->title;?></h2>

			<div class="portfolio__desc" data-aos="fade-up-right" data-aos-delay="700">
				<div class="row">
					<div class="col-12 col-lg-8">
						<?php print_r($category->description);?>
					</div>
				</div>
			</div>
		</header>

		<div class="button-group filter-button-group mb-4 mb-lg-5" data-aos="fade-down" data-aos-delay="1000">
			<button class="active" data-filter="*">All <span class="d-lg-none">projects</span></button>
			<button data-filter=".front-end">Front-end development</button>
			<button data-filter=".webdesign">Webdesign</button>
			<button data-filter=".graphic">Graphic</button>
		</div>

		<div class="grid row g-3" data-aos="fade-up" data-aos-delay="1000">
			<div class="grid__item col-6 col-lg-4 block-1 front-end webdesign graphic"></div>
			<div class="grid__item col-6 col-lg-4 block-2 front-end webdesign graphic"></div>
			<?php foreach ($items as $key=>$item) : 
				$images = json_decode($item->images);
				$jcfields = FieldsHelper::getFields('com_content.article', $item, true);
				$fields_by_name = \Joomla\Utilities\ArrayHelper::pivot($jcfields, 'name');
				$item_duration = $item_count * $key;
				?>
				<div class="grid__item col-6 col-lg-4 <?= str_replace(',','',$fields_by_name['portfolio-category']->value);?>">
					<button type="button" class="portfolio-item btn btn-card p-0" data-bs-toggle="modal" data-bs-target="#Modal-<?= $item->id;?>">
						<?php if (isset($images->image_intro) && !empty($images->image_intro)) : // Проверка на пустоту ?>
							<?php if ( strpos($images->image_intro, '.mp4') === FALSE ) : // Проверяем на наличие видео ?>
								<img class="lazyload" src="<?= $images->image_intro; ?>" alt="<?php echo $item->title; ?>">
							<?php else :?>
								<video src="<?= $images->image_intro; ?>" type="video/mp4" autoplay loop muted width="100%" style="aspect-ratio: <?= $fields_by_name['width']->value;?> / <?= $fields_by_name['height']->value;?>"></video>
							<?php endif; ?>
						<?php endif; ?>
						<div class="portfolio-item__name">
							<div class="tags d-flex justify-content-center mb-2">
								<?php if (is_array($fields_by_name['portfolio-category']->rawvalue) == false):?>
									<div class="tags__item">
										<?= $fields_by_name['portfolio-category']->rawvalue == 'front-end' ? 'coding' : 'design';?>
									</div>
								<?php else:?>
									<?php foreach ($fields_by_name['portfolio-category']->rawvalue as $tag):?>
										<div class="tags__item">
											<?= $tag == 'front-end' ? 'coding' : 'design';?>
										</div>
									<?php endforeach; ?>
								<?php endif; ?>
							</div>
							<h4><?php echo $item->title; ?></h4>
							<div class="divider"></div>
							<div class="introtext"><?php echo $item->introtext; ?></div>
							<div class="tools-list mt-3">
								<?php foreach ($fields_by_name['tools-project']->rawvalue as $field) :?>
									<i class="<?= $field;?> me-2"></i> 
								<?php endforeach; ?>
							</div>
						</div>
					</button>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</div>

<!-- Modal -->
<?php foreach ($items as $modal) : 
	$images = json_decode($modal->images);
	$jcfields = FieldsHelper::getFields('com_content.article', $modal, true);
	$fields_by_name = \Joomla\Utilities\ArrayHelper::pivot($jcfields, 'name');
	?>
	<div class="modal fade" id="Modal-<?= $modal->id;?>" tabindex="-1" aria-labelledby="ModalLabel-<?= $modal->id;?>" aria-hidden="true">
		<div class="modal-dialog modal-dialog-centered modal-xl">
			<div class="modal-content">
				<button type="button" class="btn close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-regular fa-xmark"></i></button>
				<div class="modal-body">
					<div class="row flex-column-reverse flex-md-row">
						<div class="col-12 col-md-5 <?= ($fields_by_name['big-column']->rawvalue == 0) ? 'col-lg-6 col-xl-5' : 'col-lg-6';?>">
							<? // ============================ Media ============================ ?>
							<?php if (isset($images->image_fulltext) && !empty($images->image_fulltext)) : // Проверка на пустоту ?>
								<?php if ( strpos($images->image_fulltext, '.mp4') === FALSE ) : // Проверяем на наличие видео ?>
									<?php if (is_dir($images->image_fulltext) == TRUE) : // Проверяем каталог это или файл ?>
										<?
											// Разбираем файлы из заданного каталога
											$files_dir = $images->image_fulltext;
											$files = scandir($images->image_fulltext);

											$files_dir .= (substr($files_dir, -1) == '/' ? '' : '/')
										?>
										<div class="gallery-block">
											<div class="swiper-container sliderItem-swiper overflow-hidden">
												<div class="swiper-wrapper">
													<?php foreach ($files as $file) : ?>
													<?php if (preg_match("/\.(jpeg|gif|jpg|png|webp|mp4)$/i", $file)) :  ?>
														<?php $file_path = $files_dir . $file; // Полный путь до файла ?>
														<div class="swiper-slide">
															<a href="<?= $file_path; ?>" class="fancybox" data-fancybox="gallery-news-item-<?= $modal->id; ?>">
																<?php if ( strpos($file_path, '.mp4') === FALSE ) : // Проверяем на наличие видео ?>
																	<img src="<?= $file_path; ?>" alt="<?= $modal->title; ?>" title="<?= $modal->title; ?>" class="lazyload img-responsive">
																<?php else :?>
																	<video src="<?= $file_path; ?>" type="video/mp4" autoplay loop muted width="100%"></video>
																<?php endif; ?>
															</a>
														</div>
													<?php endif; ?>
													<?php endforeach; ?>
												</div>

												<div class="swiper-prev"><i class="far fa-chevron-left"></i></div>
												<div class="swiper-next"><i class="far fa-chevron-right"></i></div>
											</div>
										</div>

									<?php else : // Если это файл то выводим картинку ?>
										<?php $imgfloat = (empty($images->float_fulltext)) ? $params->get('float_fulltext') : $images->float_fulltext; ?>
										<div class="item-image"><a class="fancybox" href="<?php echo htmlspecialchars($images->image_fulltext); ?>"><img
										<?php if ($images->image_fulltext_caption):
											echo 'class="caption"' . ' title="' . htmlspecialchars($images->image_fulltext_caption) . '"';
										endif; ?>
										class="lazyload"
										src="<?php echo htmlspecialchars($images->image_fulltext); ?>" alt="<?php echo htmlspecialchars($images->image_fulltext_alt); ?>" title="<?= $modal->title; ?>" itemprop="image"/> </a></div>
									<?php endif; ?>
										
								<?php else : // Строка содержить Видео ?>

									<div class="item-image">
										<a href="<?= $images->image_fulltext; ?>" class="fancybox" data-fancybox="gallery-news-item-<?= $modal->id; ?>">
											<video src="<?= $images->image_fulltext; ?>" type="video/mp4" autoplay loop muted width="100%"></video>
										</a>
									</div>
								<?php endif; ?>
							<?php endif; ?>
						<? // ============================ Media-END ======================== ?>
						</div>
						<div class="col-12 col-md-7 <?= ($fields_by_name['big-column']->rawvalue == 0) ? 'col-lg-6 offset-xl-1' : 'col-lg-5 offset-lg-1';?>  pt-4 pb-4">
							<h4 class="mb-4 color-primary"><?php echo $modal->title; ?></h4>
							<div>
								<?php if ($modal->fulltext):?>
									<?php echo $modal->fulltext; ?>
								<?php else:?>
									<?php echo $modal->introtext; ?>
								<?php endif;?>
							</div>

							<div class="tools-list">
								<?php foreach ($fields_by_name['tools-project']->rawvalue as $field) :?>
									<i class="<?= $field;?> me-2"></i> 
								<?php endforeach; ?>
							</div>

							<?php if ($fields_by_name['link-site']->value):?>
								<div class="fields py-3">
									<a target="_blank" href="<?= $fields_by_name['link-site']->value;?>"><i class="fa-regular fa-square-arrow-up-right me-3"></i> <?= $fields_by_name['link-site']->value;?></a>
								</div>
							<?php endif;?>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php endforeach; ?>