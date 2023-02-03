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

if (!$list)
{
	return;
}
$items = $list;
$item_count = 300;
?>

<div class="tools row g-4">
	<?php foreach ($items as $key=>$item) : 
		$jcfields = FieldsHelper::getFields('com_content.article', $item, true);
		$fields_by_name = \Joomla\Utilities\ArrayHelper::pivot($jcfields, 'name');
		$item_duration = $item_count * $key;
		?>
		<div class="tools__item col-6 col-md-3 col-lg text-center" data-aos="zoom-in" data-aos-delay="<?= $item_duration; ?>">
			<div class="tools__item-icon"><i class="<?= $fields_by_name['fontawesome']->value;?>"></i></div> 
			<div class="tools__item-title mt-3"><?php echo $item->title; ?></div>
		</div>
	<?php endforeach; ?>
</div>
