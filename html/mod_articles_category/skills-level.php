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

?>
<div class="skills">
	<?php foreach ($items as $item) : 
		$jcfields = FieldsHelper::getFields('com_content.article', $item, true);
		$fields_by_name = \Joomla\Utilities\ArrayHelper::pivot($jcfields, 'name');
		?>
		<div class="skill">
			<div class="skill-name"><?php echo $item->title; ?></div>
			<div class="skill-bar">
				<div class="skill-per" per="<?= $fields_by_name['skill-percentage']->rawvalue;?>%" style="max-width:<?= $fields_by_name['skill-percentage']->rawvalue;?>%"></div>
			</div>
        </div>
	<?php endforeach; ?>
</div>
